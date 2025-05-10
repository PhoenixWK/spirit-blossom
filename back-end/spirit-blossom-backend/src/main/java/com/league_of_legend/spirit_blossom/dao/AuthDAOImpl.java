package com.league_of_legend.spirit_blossom.dao;
import org.springframework.beans.factory.annotation.Autowired;

import com.league_of_legend.spirit_blossom.model.UserAccount;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Component;

@Component
public class AuthDAOImpl implements AuthDAO {

    private EntityManager entityManager;

    @Autowired
    public AuthDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void saveUserByEmailAndHashedPassword(UserAccount userAccount) {
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
