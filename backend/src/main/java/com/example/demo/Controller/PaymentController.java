package com.example.demo.Controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Deals;
import com.example.demo.Model.Property;
import com.example.demo.Repository.DealsRepository;
import com.example.demo.Repository.PropertyRepository;
import com.stripe.Stripe;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import com.stripe.param.checkout.SessionCreateParams;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;

    @Value("${stripe.webhook.secret}")
    private String stripeWebKey;


    @PostConstruct
    public void init() {
        if (stripeSecretKey == null || stripeSecretKey.isEmpty()) {
            throw new IllegalArgumentException("Stripe secret key is not set");
        }
        Stripe.apiKey = stripeSecretKey;
    }


    @Autowired
    private PropertyRepository propertyRepository;
    
    @Autowired
    private DealsRepository dealsRepository;


    

    @GetMapping("/verify-session")
    public ResponseEntity<?> verifySession(@RequestParam String session_id) {
        try {
            Session session = Session.retrieve(session_id);
            if ("complete".equals(session.getStatus())) {
                return ResponseEntity.ok(Map.of("success", true));
            } else {
                return ResponseEntity.ok(Map.of("success", false));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "Failed to verify session"));
        }
    }

    
    @PostMapping("/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody Deals request) {
        try {
            String propertyId = request.getIdProperty();
            float amount = request.getAmountInvested();

            Optional<Property> optionalProperty = propertyRepository.findById(propertyId);
            if (optionalProperty.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Property not found"));
            }

            Property property = optionalProperty.get();

            String successUrl = "http://localhost:5173/properties/" + property.getId() + "?session_id={CHECKOUT_SESSION_ID}";
            String cancelUrl = "http://localhost:5173/properties/" + property.getId();

            List<SessionCreateParams.LineItem> lineItems = new ArrayList<>();
            lineItems.add(
                SessionCreateParams.LineItem.builder()
                    .setQuantity(1L)
                    .setPriceData(
                        SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("usd")
                            .setUnitAmount((long) amount * 100) // Stripe expects amount in cents
                            .setProductData(
                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName(property.getTitle())
                                    .setDescription(property.getOverview())
                                    .addImage(property.getListImages().get(0)) // 1st image
                                    .build()
                            )
                            .build()
                    )
                    .build()
            );

            SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl(successUrl)
                .setCancelUrl(cancelUrl)
                .addAllLineItem(lineItems)
                .putMetadata("idProperty", request.getIdProperty())
                .putMetadata("idUser", String.valueOf(request.getIdUser()))
                .putMetadata("amountInvested", String.valueOf(request.getAmountInvested()))
                .build();


            Session session = Session.create(params);

            Map<String, String> response = new HashMap<>();
            response.put("id", session.getId());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", e.getMessage()));
        }
    }



    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeWebhook(@RequestBody String payload,
                                                    @RequestHeader("Stripe-Signature") String sigHeader) {
        String endpointSecret = stripeWebKey; // Webhook secret from Stripe dashboard

        Event event;
        try {
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("");
        }

        if ("checkout.session.completed".equals(event.getType())) {
            Session session = (Session) event.getDataObjectDeserializer().getObject().get();

            String idProperty = session.getMetadata().get("idProperty");
            int idUser = Integer.parseInt(session.getMetadata().get("idUser"));
            float amountInvested = Float.parseFloat(session.getMetadata().get("amountInvested"));

            Deals deal = new Deals(idProperty, idUser, amountInvested);
            dealsRepository.save(deal); // Make sure you inject this repository
        }

        return ResponseEntity.ok("");
    }


}
