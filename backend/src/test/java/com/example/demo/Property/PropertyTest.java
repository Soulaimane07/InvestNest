package com.example.demo.Property;

import com.example.demo.Model.Property;
import com.example.demo.Repository.PropertyRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataMongoTest
public class PropertyTest {

    @Autowired
    private PropertyRepository propertyRepository;

    @BeforeEach
    public void setUp() {
        propertyRepository.deleteAll();
    }

    @Test
    public void testCreateProperty() {
        Property property = new Property();
        property.setTitle("Ocean View Villa");
        property.setLocation("Amazing villa near the sea");
        property.setPrice(500000.0);

        Property saved = propertyRepository.save(property);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getTitle()).isEqualTo("Ocean View Villa");
    }

    @Test
    public void testGetAllProperties() {
        Property p1 = new Property();
        p1.setTitle("Title1");
        Property p2 = new Property();
        p2.setTitle("Title2");

        propertyRepository.save(p1);
        propertyRepository.save(p2);

        List<Property> all = propertyRepository.findAll();
        assertThat(all.size()).isEqualTo(2);
    }

    @Test
    public void testGetPropertyById() {
        Property property = new Property();
        property.setTitle("Test");

        Property saved = propertyRepository.save(property);

        Optional<Property> found = propertyRepository.findById(saved.getId());

        assertThat(found).isPresent();
        assertThat(found.get().getTitle()).isEqualTo("Test");
    }

    @Test
    public void testDeletePropertyById() {
        Property property = new Property();
        Property saved = propertyRepository.save(property);

        propertyRepository.deleteById(saved.getId());

        Optional<Property> result = propertyRepository.findById(saved.getId());
        assertThat(result).isEmpty();
    }

    @Test
    public void testDeleteAllProperties() {
        propertyRepository.save(new Property());
        propertyRepository.save(new Property());

        propertyRepository.deleteAll();

        List<Property> all = propertyRepository.findAll();
        assertThat(all).isEmpty();
    }
}
