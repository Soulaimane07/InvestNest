package com.example.demo.Transactions;

import com.example.demo.Model.Transaction;
import com.example.demo.Model.Transaction.TransactionStatus;
import com.example.demo.Model.Transaction.TransactionType;
import com.example.demo.Model.UserWallet;
import com.example.demo.Repository.TransactionRepository;
import com.example.demo.Repository.UserWalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TransactionTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserWalletRepository userWalletRepository;

    private RestTemplate restTemplate = new RestTemplate();

    private String getBaseUrl() {
        return "http://localhost:" + port + "/api/transactions";
    }

    @BeforeEach
    public void setUp() {
        transactionRepository.deleteAll();
        userWalletRepository.deleteAll();
    }

    @Test
    public void testGetAllTransactionsEndpoint() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(1);
        wallet = userWalletRepository.save(wallet);

        Transaction tx1 = new Transaction(TransactionType.DEPOSIT, TransactionStatus.SUCCESS, LocalDateTime.now(),
                100.0f, wallet);
        Transaction tx2 = new Transaction(TransactionType.WITHDRAW, TransactionStatus.FAILED, LocalDateTime.now(),
                50.0f, wallet);
        transactionRepository.saveAll(Arrays.asList(tx1, tx2));

        ResponseEntity<Transaction[]> response = restTemplate.getForEntity(getBaseUrl(), Transaction[].class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody()).hasSize(2);
    }

    @Test
    public void testGetTransactionsByWalletEndpoint() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(2);
        wallet = userWalletRepository.save(wallet);

        Transaction tx = new Transaction(TransactionType.DEPOSIT, TransactionStatus.SUCCESS, LocalDateTime.now(),
                150.0f, wallet);
        transactionRepository.save(tx);

        String url = getBaseUrl() + "/wallet/" + wallet.getId();
        ResponseEntity<Transaction[]> response = restTemplate.getForEntity(url, Transaction[].class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody()).hasSize(1);
        assertThat(response.getBody()[0].getAmount()).isEqualTo(150.0f);
        assertThat(response.getBody()[0].getType()).isEqualTo(TransactionType.DEPOSIT);
    }

    @Test
    public void testGetTransactionsByWallet_NotFound() {
        String url = getBaseUrl() + "/wallet/999";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
        assertThat(response.getBody()).contains("Wallet not found");
    }
}
