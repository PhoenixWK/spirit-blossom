package com.league_of_legend.spirit_blossom.service;

import com.league_of_legend.spirit_blossom.dto.UserAccountDTO;
import com.league_of_legend.spirit_blossom.model.UserAccount;

public interface AuthService {
    UserAccount findUserAccountByEmailAndHashedPassword(String email, String hashedPassword);
    UserAccount saveUserEmailAndHashedPassword(UserAccountDTO userAccountDTO);
}
