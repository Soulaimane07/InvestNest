package com.example.demo.Controller;

import com.example.demo.Model.Deals;
import com.example.demo.Model.Property;
import com.example.demo.Repository.DealsRepository;
import com.example.demo.Repository.PropertyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/deals")
public class DealsController {

    private final DealsRepository dealsRepository;
    private final PropertyRepository propertyRepository;

    @Autowired
    public DealsController(DealsRepository dealsRepository, PropertyRepository propertyRepository) {
        this.dealsRepository = dealsRepository;
        this.propertyRepository = propertyRepository;
    }

    // Get all deals
    @GetMapping
    public List<Deals> getAllDeals() {
        return dealsRepository.findAll();
    }

    // Get a deal by ID
    @GetMapping("/{id}")
    public Optional<Deals> getDealById(@PathVariable int id) {
        return dealsRepository.findById(id);
    }

    
    @GetMapping("/user/{userId}")
    public List<Deals> getDealsByUserId(@PathVariable int userId) {
        List<Deals> deals = dealsRepository.findByIdUser(userId);

        // Enrich each deal with its corresponding Property data
        for (Deals deal : deals) {
            Optional<Property> propertyOpt = propertyRepository.findById(deal.getIdProperty());
            propertyOpt.ifPresent(deal::setProperty);  // Set the full Property object in the deal
        }

        return deals;
    }




    // Save a new deal
    @PostMapping
    public Deals createDeal(@RequestBody Deals deal) {
        return dealsRepository.save(deal);
    }

    // Delete a deal by ID
    @DeleteMapping("/{id}")
    public void deleteDeal(@PathVariable int id) {
        dealsRepository.deleteById(id);
    }
}
