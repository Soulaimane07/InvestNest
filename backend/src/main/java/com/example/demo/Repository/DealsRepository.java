package com.example.demo.Repository;

import com.example.demo.Model.Deals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DealsRepository extends JpaRepository<Deals, Integer> {

    // Custom query methods (optional):
    List<Deals> findByIdUser(int idUser);

    List<Deals> findByIdProperty(String idProperty);
}
