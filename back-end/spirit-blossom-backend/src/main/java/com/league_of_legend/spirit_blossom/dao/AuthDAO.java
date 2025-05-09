package com.league_of_legend.spirit_blossom.dao;
import com.league_of_legend.spirit_blossom.model.UserAccount;

public interface AuthDAO {
    void saveUserAccount(String email, String password);
    UserAccount findUserAccountByEmailAndPassword(String email, String password);
}
