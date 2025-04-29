package com.league_of_legend.spirit_blossom.service;

import com.league_of_legend.spirit_blossom.model.UserAccount;

public interface AuthService {
    void saveUserAccount(String email, String password);
    UserAccount findUserAccountByEmailAndPassword(String email, String password);
}
