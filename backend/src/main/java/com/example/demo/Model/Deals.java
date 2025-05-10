package com.example.demo.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "deals")
public class Deals {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String idProperty;
    private int idUser;
    private float amountInvested;

    // New field for Property
    @Transient
    private Property property; // This field is not persisted in the database

    public Deals() {
    }

    public Deals(String idProperty, int idUser, float amountInvested) {
        this.idProperty = idProperty;
        this.idUser = idUser;
        this.amountInvested = amountInvested;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIdProperty() {
        return idProperty;
    }

    public void setIdProperty(String idProperty) {
        this.idProperty = idProperty;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public float getAmountInvested() {
        return amountInvested;
    }

    public void setAmountInvested(float amountInvested) {
        this.amountInvested = amountInvested;
    }

    // New getter and setter for Property
    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    @Override
    public String toString() {
        return "Deals{" +
                "id=" + id +
                ", idProperty='" + idProperty + '\'' +
                ", idUser=" + idUser +
                ", amountInvested=" + amountInvested +
                ", property=" + property +
                '}';
    }
}

