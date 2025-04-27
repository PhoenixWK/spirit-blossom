package com.league_of_legend.spirit_blossom.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.league_of_legend.spirit_blossom.model.UserAccount;
import com.league_of_legend.spirit_blossom.service.AuthService;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@Service
public class AuthImpl implements AuthService {

    private EntityManager entityManager;

    @Autowired
    public AuthImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void saveUserAccount(String email, String password) {
        UserAccount userAccount = new UserAccount(email, password);
        entityManager.persist(userAccount);
    }

    @Override
    public void readUserAccount(String email, String password) {
        
    }
    
}
