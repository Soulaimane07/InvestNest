package com.example.demo.Model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "wallets")
public class UserWallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int userId;  // Only store userId

    private float balance;
    private float rewards;

    // One-to-many relationship with transactions
    @OneToMany(mappedBy = "wallet", fetch = FetchType.LAZY)
    private List<Transaction> transactions;

    public UserWallet() {}

    public UserWallet(int userId, float balance, float rewards) {
        this.userId = userId;
        this.balance = balance;
        this.rewards = rewards;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public float getRewards() {
        return rewards;
    }

    public void setRewards(float rewards) {
        this.rewards = rewards;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }
}
