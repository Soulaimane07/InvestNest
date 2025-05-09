package com.example.demo.Repository;

import com.example.demo.Model.Transaction;
import com.example.demo.Model.UserWallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> findByWallet(UserWallet wallet);
}
