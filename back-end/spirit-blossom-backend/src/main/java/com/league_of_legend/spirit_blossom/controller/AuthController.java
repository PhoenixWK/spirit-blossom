package com.league_of_legend.spirit_blossom.controller;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.league_of_legend.spirit_blossom.model.UserAccount;
import com.league_of_legend.spirit_blossom.service.AuthService;

import jakarta.security.auth.message.AuthException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    private AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
        @RequestParam("email") String email, 
        @RequestParam("password") String password
    ) throws AuthException {
        UserAccount user = authService.findUserAccountByEmailAndPassword(email, password);
        Map<String, Object> response = new HashMap<>();

        if(user == null) {
            throw new AuthException();
        }
        response.put("message", "Login successful");
        response.put("userId", user.getId());
                
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user-profile/{userId}")
    public UserAccount getUserAccount(@PathVariable String userId) {
        return null;
    }

    @GetMapping("/hello-world")
    public String helloWorld() {
        return "Hello World";
    }
    
}