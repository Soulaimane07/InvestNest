package com.example.demo.Controller;

import com.example.demo.Model.Transaction.TransactionType;
import com.example.demo.Model.Transaction.TransactionStatus;
import com.example.demo.Model.Transaction;
import com.example.demo.Model.User;
import com.example.demo.Model.UserWallet;
import com.example.demo.Repository.TransactionRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Repository.UserWalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/wallets")
public class UserWalletController {

    @Autowired
    private UserWalletRepository userWalletRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    // Get wallet by user ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<UserWallet> getWalletByUserId(@PathVariable int userId) {
        Optional<UserWallet> wallet = userWalletRepository.findByUserId(userId);
        return wallet.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Create wallet for a user
    @PostMapping("/user/{userId}")
    public ResponseEntity<UserWallet> createWallet(@PathVariable int userId, @RequestBody UserWallet walletData) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        UserWallet wallet = new UserWallet();
        wallet.setUserId(userId);  // Store only userId
        wallet.setBalance(walletData.getBalance());
        wallet.setRewards(walletData.getRewards());

        UserWallet savedWallet = userWalletRepository.save(wallet);
        return ResponseEntity.ok(savedWallet);
    }

    // Deposit into wallet
    @PostMapping("/user/{userId}/deposit")
    public ResponseEntity<UserWallet> deposit(@PathVariable int userId, @RequestParam float amount) {
        Optional<UserWallet> optionalWallet = userWalletRepository.findByUserId(userId);
        if (!optionalWallet.isPresent()) {
            return ResponseEntity.status(404).body(null); // Wallet not found
        }

        UserWallet wallet = optionalWallet.get();
        wallet.setBalance(wallet.getBalance() + amount);
        userWalletRepository.save(wallet);

        // Create a transaction record
        Transaction transaction = new Transaction(
                TransactionType.DEPOSIT,
                TransactionStatus.SUCCESS,
                LocalDateTime.now(),
                amount,
                wallet
        );
        transactionRepository.save(transaction);

        return ResponseEntity.ok(wallet);
    }

    // Withdraw from wallet
    @PostMapping("/user/{userId}/withdraw")
    public ResponseEntity<UserWallet> withdraw(@PathVariable int userId, @RequestParam float amount) {
        Optional<UserWallet> optionalWallet = userWalletRepository.findByUserId(userId);
        if (!optionalWallet.isPresent()) {
            return ResponseEntity.status(404).body(null); // Wallet not found
        }

        UserWallet wallet = optionalWallet.get();
        if (wallet.getBalance() < amount) {
            Transaction failedTx = new Transaction(
                    TransactionType.WITHDRAW,
                    TransactionStatus.FAILED,
                    LocalDateTime.now(),
                    amount,
                    wallet
            );
            transactionRepository.save(failedTx);
            return ResponseEntity.status(400).body(null); // Insufficient balance
        }

        wallet.setBalance(wallet.getBalance() - amount);
        userWalletRepository.save(wallet);

        Transaction transaction = new Transaction(
                TransactionType.WITHDRAW,
                TransactionStatus.SUCCESS,
                LocalDateTime.now(),
                amount,
                wallet
        );
        transactionRepository.save(transaction);

        return ResponseEntity.ok(wallet);
    }
}
