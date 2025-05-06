package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Property;

@Repository
public interface PropertyRepository extends MongoRepository<Property, String> {
}
