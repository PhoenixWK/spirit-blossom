package com.league_of_legend.spirit_blossom.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_account")
public class UserAccount {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password")
    private String password;

    public UserAccount() {}
    public UserAccount(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
