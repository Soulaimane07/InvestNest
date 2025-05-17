package com.example.demo.UserWallet;

import com.example.demo.Model.Transaction;
import com.example.demo.Model.User;
import com.example.demo.Model.UserWallet;
import com.example.demo.Repository.TransactionRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Repository.UserWalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserWalletTest {

    @LocalServerPort
    private int port;

    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
    private UserWalletRepository userWalletRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    private String getBaseUrl() {
        return "http://localhost:" + port + "/api/wallets";
    }

    private int createdUserId;

    @BeforeEach
    public void setup() {
        transactionRepository.deleteAll();
        userWalletRepository.deleteAll();
        userRepository.deleteAll();

        // Create a test user
        User user = new User();
        user.setFullname("Test User");
        user.setEmail("test@example.com");
        user = userRepository.save(user);
        createdUserId = user.getId();
    }

@Test
    public void testDepositSuccess() {
        // Create wallet
        UserWallet wallet = new UserWallet();
        wallet.setBalance(100f);
        wallet.setRewards(0);
        ResponseEntity<UserWallet> createResponse = restTemplate.postForEntity(
                getBaseUrl() + "/user/" + createdUserId,
                wallet,
                UserWallet.class
        );
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        int walletId = createResponse.getBody().getId();

        // Deposit 50
        ResponseEntity<UserWallet> depositResponse = restTemplate.postForEntity(
                getBaseUrl() + "/user/" + createdUserId + "/deposit?amount=50",
                null,
                UserWallet.class
        );

        assertThat(depositResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(depositResponse.getBody().getBalance()).isEqual;
    }
}