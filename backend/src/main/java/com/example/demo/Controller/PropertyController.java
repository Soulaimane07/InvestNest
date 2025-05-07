package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Property;
import com.example.demo.Repository.PropertyRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // Create a property
    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

    // Get all propertys
    @GetMapping
    public List<Property> getAllPropertys() {
        return propertyRepository.findAll();
    }

    // Get a property by ID
    @GetMapping("/{id}")
    public Optional<Property> getPropertyById(@PathVariable String id) {
        return propertyRepository.findById(id);
    }

    // Delete a property by ID
    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable String id) {
        propertyRepository.deleteById(id);
    }

    @DeleteMapping
    public void deleteallProperty() {
        propertyRepository.deleteAll();
    }
}
