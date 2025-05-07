package com.example.demo.Controller;

import com.example.demo.Model.Property;
import com.example.demo.Model.LikedProperty;
import com.example.demo.Repository.PropertyRepository;
import com.example.demo.Repository.LikedPropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/likedProperties")
public class LikedPropertyController {

    @Autowired
    private LikedPropertyRepository likedPropertyRepository;
    @Autowired
    private PropertyRepository propertyRepository;

    @PostMapping
    public ResponseEntity<?> saveProperty(@RequestBody LikedProperty likedProperty) {
        // Assuming the combination of userId and propertyId must be unique
        Optional<LikedProperty> existing = likedPropertyRepository
            .findByIdUserAndIdProperty(likedProperty.getIdUser(), likedProperty.getIdProperty());

        if (existing.isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("This property is already liked.");
        }

        LikedProperty saved = likedPropertyRepository.save(likedProperty);
        return ResponseEntity.ok(saved);
    }


    @GetMapping
    public List<LikedProperty> getAllSavedProperties() {
        return likedPropertyRepository.findAll();
    }

    @GetMapping("/user/{idUser}")
    public List<Property> getSavedPropertiesByUserId(@PathVariable int idUser) {
        List<LikedProperty> savedList = likedPropertyRepository.findByIdUser(idUser);
        
        return savedList.stream()
            .map(saved -> propertyRepository.findById(saved.getIdProperty()).orElse(null))
            .filter(property -> property != null)
            .collect(Collectors.toList());
    }


    @DeleteMapping("/{id}")
    public void deleteLikedProperty(@PathVariable String id) {
        likedPropertyRepository.deleteById(id);
    }
    
    @DeleteMapping
    public void deleteallLikedProperty() {
        likedPropertyRepository.deleteAll();
    }
}
