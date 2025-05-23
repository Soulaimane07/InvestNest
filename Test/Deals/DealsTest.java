package com.example.demo.Deals;

import com.example.demo.Model.Deals;
import com.example.demo.Model.Property;
import com.example.demo.Repository.DealsRepository;
import com.example.demo.Repository.PropertyRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
public class DealsTest {

    @Autowired
    private DealsRepository dealsRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @BeforeEach
    public void setup() {
        // Optionnel : nettoyer les tables avant chaque test
        // dealsRepository.deleteAll();
        // propertyRepository.deleteAll();
    }

    @Test
    public void testCreateDeal() {
        Deals deal = new Deals();
        deal.setIdUser(1);
        deal.setIdProperty("1"); // Assure-toi qu’une propriété avec id 1 existe, sinon crée-la d’abord.

        Deals savedDeal = dealsRepository.save(deal);

        assertThat(savedDeal).isNotNull();
        assertThat(savedDeal.getId()).isNotNull();
    }

    @Test
    public void testGetAllDeals() {
        Deals deal1 = new Deals();
        deal1.setIdUser(1);
        deal1.setIdProperty("1");
        dealsRepository.save(deal1);

        Deals deal2 = new Deals();
        deal2.setIdUser(2);
        deal2.setIdProperty("2");
        dealsRepository.save(deal2);

        List<Deals> allDeals = dealsRepository.findAll();
        assertThat(allDeals).isNotEmpty();
    }

    @Test
    public void testGetDealById() {
        Deals deal = new Deals();
        deal.setIdUser(1);
        deal.setIdProperty("1");
        Deals savedDeal = dealsRepository.save(deal);

        Optional<Deals> fetchedDeal = dealsRepository.findById(savedDeal.getId());
        assertThat(fetchedDeal).isPresent();
        assertThat(fetchedDeal.get().getIdUser()).isEqualTo(1);
    }

    @Test
    public void testGetDealsByUserId() {
        Deals deal = new Deals();
        deal.setIdUser(99);
        deal.setIdProperty("1");
        dealsRepository.save(deal);

        List<Deals> userDeals = dealsRepository.findByIdUser(99);
        assertThat(userDeals).isNotEmpty();
        assertThat(userDeals.get(0).getIdUser()).isEqualTo(99);
    }

    @Test
    public void testDeleteDeal() {
        Deals deal = new Deals();
        deal.setIdUser(1);
        deal.setIdProperty("1");
        Deals savedDeal = dealsRepository.save(deal);

        dealsRepository.deleteById(savedDeal.getId());

        Optional<Deals> deleted = dealsRepository.findById(savedDeal.getId());
        assertThat(deleted).isNotPresent();
    }

    @Test
    public void testEnrichDealsWithProperty() {
        // Crée une propriété
        Property property = new Property();
        property = propertyRepository.save(property);

        // Crée un deal lié à cette propriété
        Deals deal = new Deals();
        deal.setIdUser(1);
        deal.setIdProperty(property.getId());
        deal = dealsRepository.save(deal);

        // Simule ce que fait le contrôleur
        Optional<Property> optionalProperty = propertyRepository.findById(deal.getIdProperty());
        optionalProperty.ifPresent(deal::setProperty);

        assertThat(deal.getProperty()).isNotNull();
    }
}
