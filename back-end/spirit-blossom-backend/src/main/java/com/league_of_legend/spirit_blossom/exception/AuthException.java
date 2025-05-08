package com.league_of_legend.spirit_blossom.exception;

public class AuthException extends RuntimeException {
    private final String errorCode;

    public AuthException(String message) {
        super(message);
        this.errorCode = "AUTH_EXCEPTION";
    }

    public AuthException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return this.errorCode;
    }
}
