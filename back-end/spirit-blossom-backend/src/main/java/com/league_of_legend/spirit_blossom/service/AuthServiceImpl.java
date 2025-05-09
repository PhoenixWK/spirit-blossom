package com.league_of_legend.spirit_blossom.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.league_of_legend.spirit_blossom.model.UserAccount;
import com.league_of_legend.spirit_blossom.dao.AuthDAO;

@Service
public class AuthServiceImpl implements AuthService {

    private AuthDAO authDAO;

    @Autowired
    public AuthServiceImpl(AuthDAO authDAO) {
        this.authDAO = authDAO;
    }

    @Override
    public void saveUserAccount(String email, String password) {
        authDAO.saveUserAccount(email, password);
    }

    @Override
    public UserAccount findUserAccountByEmailAndPassword(String email, String password) {
        return authDAO.findUserAccountByEmailAndPassword(email, password);
    }
    
}
