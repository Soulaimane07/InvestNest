package com.example.demo.Model;

import jakarta.persistence.*; // or use javax.persistence.* if using an older JDK

@Entity
@Table(name = "users") // optional, to specify the table name
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment ID
    private int id;

    private String fullname;
    private String email;
    private String password;

    public User() {}

    public User(String fullname, String email, String password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
