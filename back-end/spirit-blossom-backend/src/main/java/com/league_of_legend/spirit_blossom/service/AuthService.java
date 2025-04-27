package com.league_of_legend.spirit_blossom.service;

public interface AuthService {
    void saveUserAccount(String email, String password);
    void readUserAccount(String email, String password);
}
