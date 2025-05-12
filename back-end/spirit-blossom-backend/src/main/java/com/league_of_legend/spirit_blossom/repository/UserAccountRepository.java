package com.league_of_legend.spirit_blossom.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.league_of_legend.spirit_blossom.model.UserAccount;

@Repository
public interface UserAccountRepository extends CrudRepository<UserAccount, UUID> {
    
    Optional<UserAccount> findByEmailAndHashedPassword(String email, String hashedPassword);
}
