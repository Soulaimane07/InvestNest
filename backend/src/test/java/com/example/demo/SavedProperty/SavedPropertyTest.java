package com.example.demo.SavedProperty;

import com.example.demo.Model.Property;
import com.example.demo.Model.SavedProperty;
import com.example.demo.Repository.PropertyRepository;
import com.example.demo.Repository.SavedPropertyRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataMongoTest
public class SavedPropertyTest {

    @Autowired
    private SavedPropertyRepository savedPropertyRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @BeforeEach
    public void setup() {
        savedPropertyRepository.deleteAll();
        propertyRepository.deleteAll();
    }

    @Test
    public void testSaveNewSavedProperty() {
        Property property = new Property();
        property.setTitle("Modern Villa");
        property = propertyRepository.save(property);

        SavedProperty saved = new SavedProperty();
        saved.setIdUser(100);
        saved.setIdProperty(property.getId());

        SavedProperty result = savedPropertyRepository.save(saved);

        assertThat(result.getId()).isNotNull();
        assertThat(result.getIdUser()).isEqualTo(100);
        assertThat(result.getIdProperty()).isEqualTo(property.getId());
    }

    @Test
    public void testPreventDuplicateSavedProperty() {
        Property property = new Property();
        property = propertyRepository.save(property);

        SavedProperty saved1 = new SavedProperty("200", 1);
        savedPropertyRepository.save(saved1);

        Optional<SavedProperty> duplicateCheck = savedPropertyRepository.findByIdUserAndIdProperty(200,
                property.getId());

        assertThat(duplicateCheck).isNotPresent();
    }

    @Test
    public void testGetSavedPropertiesByUser() {
        savedPropertyRepository.save(new SavedProperty());
        savedPropertyRepository.save(new SavedProperty());

        List<SavedProperty> savedList = savedPropertyRepository.findAll();

        assertThat(savedList.size()).isEqualTo(2);
    }

    @Test
    public void testDeleteSavedPropertyById() {
        SavedProperty saved = new SavedProperty();
        saved = savedPropertyRepository.save(saved);

        savedPropertyRepository.deleteById(saved.getId());

        Optional<SavedProperty> deleted = savedPropertyRepository.findById(saved.getId());
        assertThat(deleted).isNotPresent();
    }

    @Test
    public void testDeleteAllSavedProperties() {
        savedPropertyRepository.save(new SavedProperty());
        savedPropertyRepository.save(new SavedProperty());

        savedPropertyRepository.deleteAll();

        List<SavedProperty> all = savedPropertyRepository.findAll();
        assertThat(all).isEmpty();
    }
}
