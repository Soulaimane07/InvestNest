package com.example.demo.UserWallet;

import com.example.demo.Model.User;
import com.example.demo.Model.UserWallet;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Repository.UserWalletRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class UserWalletTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserWalletRepository userWalletRepository;

    private User savedUser;

    @BeforeEach
    void setup() {
        userRepository.deleteAll();
        userWalletRepository.deleteAll();

        User user = new User("walletuser@example.com", "Wallet User", "wallet123");
        savedUser = userRepository.save(user);
    }

    @Test
    void testCreateWallet() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(savedUser.getId());
        wallet.setBalance(100f);
        wallet.setRewards(10);

        UserWallet savedWallet = userWalletRepository.save(wallet);

        assertThat(savedWallet).isNotNull();
        assertThat(savedWallet.getId()).isNotNull();
        assertThat(savedWallet.getUserId()).isEqualTo(savedUser.getId());
        assertThat(savedWallet.getBalance()).isEqualTo(100f);
    }

    @Test
    void testUpdateWalletBalance() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(savedUser.getId());
        wallet.setBalance(100f);
        wallet = userWalletRepository.save(wallet);

        wallet.setBalance(wallet.getBalance() + 50f); // deposit 50
        UserWallet updated = userWalletRepository.save(wallet);

        assertThat(updated.getBalance()).isEqualTo(150f);
    }

    @Test
    void testGetWalletByUserId() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(savedUser.getId());
        wallet.setBalance(200f);
        userWalletRepository.save(wallet);

        Optional<UserWallet> result = userWalletRepository.findByUserId(savedUser.getId());
        assertThat(result).isPresent();
        assertThat(result.get().getBalance()).isEqualTo(200f);
    }

    @Test
    void testDeleteWallet() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(savedUser.getId());
        wallet.setBalance(75f);
        wallet = userWalletRepository.save(wallet);

        userWalletRepository.deleteById(wallet.getId());

        Optional<UserWallet> deleted = userWalletRepository.findById(wallet.getId());
        assertThat(deleted).isNotPresent();
    }
}
