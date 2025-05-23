package com.example.demo.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "property_id")
    private String propertyId;

    @Column(name = "amount")
    private Long amount;  // assuming you want to store the payment amount

    @Column(name = "payment_status")
    private String paymentStatus;  // stores the status of the payment (e.g., "completed", "pending", etc.)

    @Column(name = "payment_date")
    private String paymentDate;  // stores the date of the payment, formatted as a string

    // Constructors
    public Payment() {
    }

    public Payment(int userId, String propertyId, Long amount, String paymentStatus, String paymentDate) {
        this.userId = userId;
        this.propertyId = propertyId;
        this.amount = amount;
        this.paymentStatus = paymentStatus;
        this.paymentDate = paymentDate;
    }

    // Getters and Setters
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

    public String getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(String propertyId) {
        this.propertyId = propertyId;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", userId=" + userId +
                ", propertyId='" + propertyId + '\'' +
                ", amount=" + amount +
                ", paymentStatus='" + paymentStatus + '\'' +
                ", paymentDate='" + paymentDate + '\'' +
                '}';
    }
}
