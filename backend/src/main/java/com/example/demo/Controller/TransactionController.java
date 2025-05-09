package com.example.demo.Controller;

import com.example.demo.Model.Transaction;
import com.example.demo.Model.UserWallet;
import com.example.demo.Repository.TransactionRepository;
import com.example.demo.Repository.UserWalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserWalletRepository userWalletRepository;

    // Get all transactions
    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    // Get transactions for a specific wallet by walletId
    @GetMapping("/wallet/{walletId}")
    public List<Transaction> getTransactionsByWallet(@PathVariable int walletId) {
        UserWallet wallet = userWalletRepository.findById(walletId)
                .orElseThrow(() -> new RuntimeException("Wallet not found"));
        return transactionRepository.findByWallet(wallet);
    }
}
