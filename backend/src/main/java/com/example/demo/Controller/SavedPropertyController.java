package com.example.demo.Controller;

import com.example.demo.Model.Property;
import com.example.demo.Model.SavedProperty;
import com.example.demo.Repository.PropertyRepository;
import com.example.demo.Repository.SavedPropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/savedProperties")
public class SavedPropertyController {

    @Autowired
    private SavedPropertyRepository savedPropertyRepository;
    @Autowired
    private PropertyRepository propertyRepository;

    @PostMapping
    public SavedProperty saveProperty(@RequestBody SavedProperty savedProperty) {
        return savedPropertyRepository.save(savedProperty);
    }

    @GetMapping
    public List<SavedProperty> getAllSavedProperties() {
        return savedPropertyRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<Property> getSavedPropertiesByUserId(@PathVariable int userId) {
        List<SavedProperty> savedList = savedPropertyRepository.findByIdUser(userId);
        
        return savedList.stream()
            .map(saved -> propertyRepository.findById(saved.getIdProperty()).orElse(null))
            .filter(property -> property != null)
            .collect(Collectors.toList());
    }


    @DeleteMapping("/{id}")
    public void deleteSavedProperty(@PathVariable String id) {
        savedPropertyRepository.deleteById(id);
    }
    
    @DeleteMapping
    public void deleteallSavedProperty() {
        savedPropertyRepository.deleteAll();
    }
}
