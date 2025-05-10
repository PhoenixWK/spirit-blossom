package com.league_of_legend.spirit_blossom.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.league_of_legend.spirit_blossom.dto.UserAccountDTO;
import com.league_of_legend.spirit_blossom.model.UserAccount;
import com.league_of_legend.spirit_blossom.repository.UserAccountRepository;

import jakarta.transaction.Transactional;


@Service
public class AuthServiceImpl implements AuthService {

    private UserAccountRepository userAccountRepository;

    @Autowired
    public AuthServiceImpl(
        UserAccountRepository userAccountRepository
    ) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public UserAccount findUserAccountByEmailAndHashedPassword(String email, String hashed_password) {
        return userAccountRepository.findByEmailAndHashedPassword(email, hashed_password).orElse(null);
    }

    @Override
    @Transactional
    public UserAccount saveUserEmailAndHashedPassword(UserAccountDTO userAccountDTO) {
        UserAccount userAccount = new UserAccount(
            userAccountDTO.getEmail(), 
            userAccountDTO.getUserName(),
            userAccountDTO.getHashedPassword()
        );
       return userAccountRepository.save(userAccount);
    }


    

    /*private AuthDAO authDAO;

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
    }*/


    
}
