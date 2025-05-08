package com.league_of_legend.spirit_blossom.model;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;

@Entity
@Table(name = "user_account")
public class UserAccount {
    
    @Id
    @GeneratedValue
    @Column(name = "user_id", nullable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "username", nullable = false, unique = true)
    private String userName;

    @Column(name = "hashed_password")
    private String hashed_password;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    public UserAccount() {}
    public UserAccount(String email, String password) {
        this.email = email;
        this.hashed_password = password;
    }

    public UUID getId() {
        return id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String hashed_password) {
        this.hashed_password = hashed_password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return hashed_password;
    }

    public String getUserName() {
        return userName;
    }
}
