package com.example.demo.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private TransactionType type;

    @Enumerated(EnumType.STRING)
    private TransactionStatus status;

    private LocalDateTime date;

    private float amount;

    @ManyToOne
    @JoinColumn(name = "wallet_id")
    @JsonIgnore  // Prevents the wallet from being serialized
    private UserWallet wallet;

    public Transaction() {}

    

    public Transaction(TransactionType type, TransactionStatus status, LocalDateTime date, float amount, UserWallet wallet) {
        this.type = type;
        this.status = status;
        this.date = date;
        this.amount = amount;
        this.wallet = wallet;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public TransactionStatus getStatus() {
        return status;
    }

    public void setStatus(TransactionStatus status) {
        this.status = status;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public UserWallet getWallet() {
        return wallet;
    }

    public void setWallet(UserWallet wallet) {
        this.wallet = wallet;
    }

    public enum TransactionType {
        DEPOSIT,
        WITHDRAW
    }
    
    public enum TransactionStatus {
        SUCCESS,
        FAILED
    }
}
