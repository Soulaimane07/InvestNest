package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.LikedProperty;

@Repository
public interface LikedPropertyRepository extends MongoRepository<LikedProperty, String> {
    List<LikedProperty> findByIdUser(int idUser);
    Optional<LikedProperty> findByUserIdAndPropertyId(int idUser, String propertyId);
}
