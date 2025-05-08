package com.league_of_legend.spirit_blossom.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.league_of_legend.spirit_blossom.model.UserAccount;
import com.league_of_legend.spirit_blossom.service.AuthService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
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
    public UserAccount findUserAccountByEmailAndPassword(String email, String password) {
        TypedQuery<UserAccount> readUserAccountQuery = entityManager.createQuery(
            "from UserAccount WHERE email=:email and hashed_password=:password",
            UserAccount.class
        );
        readUserAccountQuery.setParameter("email", email);
        readUserAccountQuery.setParameter("password", password);

        return readUserAccountQuery.getSingleResult();
    }
    
}
