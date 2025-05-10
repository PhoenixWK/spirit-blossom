package com.league_of_legend.spirit_blossom.dto;


public class UserAccountDTO {

    private String email;

    private String userName;

    private String hashedPassword;

    public UserAccountDTO() {}

    public UserAccountDTO(String email, String username, String hashedPassword) {
        this.email = email;
        this.userName = username;
        this.hashedPassword = hashedPassword;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getEmail() {
        return email;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public String getUserName() {
        return userName;
    }
}
