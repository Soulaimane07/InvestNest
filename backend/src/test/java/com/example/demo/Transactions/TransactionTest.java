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
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class TransactionTest {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserWalletRepository userWalletRepository;

    @BeforeEach
    public void setUp() {
        transactionRepository.deleteAll();
        userWalletRepository.deleteAll();
    }

    @Test
    public void testCreateTransaction() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(1);
        wallet = userWalletRepository.save(wallet);

        Transaction tx = new Transaction();
        tx.setType(TransactionType.DEPOSIT);
        tx.setStatus(TransactionStatus.SUCCESS);
        tx.setAmount(100.0f);
        tx.setWallet(wallet);

        Transaction saved = transactionRepository.save(tx);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getType()).isEqualTo(TransactionType.DEPOSIT);
        assertThat(saved.getWallet().getUserId()).isEqualTo(1);
    }

    @Test
    public void testFindAllTransactions() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(2);
        wallet = userWalletRepository.save(wallet);

        Transaction tx1 = new Transaction(TransactionType.DEPOSIT, TransactionStatus.SUCCESS, LocalDateTime.now(), 50.0f, wallet);
        Transaction tx2 = new Transaction(TransactionType.WITHDRAW, TransactionStatus.FAILED, LocalDateTime.now(), 20.0f, wallet);

        transactionRepository.save(tx1);
        transactionRepository.save(tx2);

        List<Transaction> transactions = transactionRepository.findAll();

        assertThat(transactions).hasSize(2);
    }

    @Test
    public void testFindTransactionById() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(3);
        wallet = userWalletRepository.save(wallet);

        Transaction tx = new Transaction(TransactionType.DEPOSIT, TransactionStatus.SUCCESS, LocalDateTime.now(), 75.0f, wallet);
        Transaction saved = transactionRepository.save(tx);

        Optional<Transaction> found = transactionRepository.findById(saved.getId());

        assertThat(found).isPresent();
        assertThat(found.get().getAmount()).isEqualTo(75.0f);
    }

    @Test
    public void testDeleteTransaction() {
        UserWallet wallet = new UserWallet();
        wallet.setUserId(4);
        wallet = userWalletRepository.save(wallet);

        Transaction tx = new Transaction(TransactionType.DEPOSIT, TransactionStatus.SUCCESS, LocalDateTime.now(), 120.0f, wallet);
        Transaction saved = transactionRepository.save(tx);

        transactionRepository.deleteById(saved.getId());

        Optional<Transaction> result = transactionRepository.findById(saved.getId());

        assertThat(result).isEmpty();
    }
}
