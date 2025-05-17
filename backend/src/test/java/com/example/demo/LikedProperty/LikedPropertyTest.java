package com.example.demo.LikedProperty;

import com.example.demo.Model.LikedProperty;
import com.example.demo.Model.Property;
import com.example.demo.Repository.LikedPropertyRepository;
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
public class LikedPropertyTest {

    @Autowired
    private LikedPropertyRepository likedPropertyRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @BeforeEach
    public void setup() {
        likedPropertyRepository.deleteAll();
        propertyRepository.deleteAll();
    }

    @Test
    public void testLikeProperty() {
        // Create property
        Property property = new Property();
        property.setTitle("Beautiful House");
        property = propertyRepository.save(property);

        // Save liked property
        LikedProperty liked = new LikedProperty();
        liked.setIdUser(1);
        liked.setIdProperty(property.getId());

        LikedProperty saved = likedPropertyRepository.save(liked);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getIdUser()).isEqualTo(1);
        assertThat(saved.getIdProperty()).isEqualTo(property.getId());
    }

    @Test
    public void testPreventDuplicateLikedProperty() {
        Property property = new Property();
        property.setTitle("Nice View Apartment");
        property = propertyRepository.save(property);

        LikedProperty liked1 = new LikedProperty();
        liked1.setIdUser(2);
        liked1.setIdProperty(property.getId());
        likedPropertyRepository.save(liked1);

        Optional<LikedProperty> duplicateCheck = likedPropertyRepository.findByIdUserAndIdProperty(2, property.getId());
        assertThat(duplicateCheck).isPresent();
    }

    @Test
    public void testGetLikedPropertiesByUser() {
        Property property1 = propertyRepository.save(new Property());
        Property property2 = propertyRepository.save(new Property());

        likedPropertyRepository.save(new LikedProperty(property1.getId(), 3));
        likedPropertyRepository.save(new LikedProperty(property2.getId(), 3));

        List<LikedProperty> likedList = likedPropertyRepository.findByIdUser(3);

        assertThat(likedList.size()).isEqualTo(2);
        assertThat(likedList.get(0).getIdUser()).isEqualTo(3);
    }

    @Test
    public void testDeleteLikedPropertyById() {
        LikedProperty liked = new LikedProperty();
        liked.setIdUser(4);
        liked.setIdProperty("999");
        LikedProperty saved = likedPropertyRepository.save(liked);

        likedPropertyRepository.deleteById(saved.getId());

        Optional<LikedProperty> deleted = likedPropertyRepository.findById(saved.getId());
        assertThat(deleted).isNotPresent();
    }

    @Test
    public void testDeleteAllLikedProperties() {
        likedPropertyRepository.save(new LikedProperty("10", 101));
        likedPropertyRepository.save(new LikedProperty("10", 102));
        likedPropertyRepository.save(new LikedProperty("11", 103));

        likedPropertyRepository.deleteAll();

        List<LikedProperty> all = likedPropertyRepository.findAll();
        assertThat(all).isEmpty();
    }
}
