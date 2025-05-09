package com.example.demo.Repository;

import com.example.demo.Model.UserWallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserWalletRepository extends JpaRepository<UserWallet, Integer> {
    Optional<UserWallet> findByUserId(int userId);
}
