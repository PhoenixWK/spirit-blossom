package com.league_of_legend.spirit_blossom.dto;

public class AuthErrorResponse {
    private int status;
    private String message;
    private String errorCode;
    private long timestamp;

    public AuthErrorResponse() {
        this.timestamp = System.currentTimeMillis();
    }

    public AuthErrorResponse(int status, String message) {
        this();
        this.status = status;
        this.message = message;
    }
    
    public AuthErrorResponse(int status, String errorCode, String message) {
        this();
        this.status = status;
        this.errorCode = errorCode;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
    
    public String getErrorCode() {
        return errorCode;
    }
    
    public long getTimestamp() {
        return timestamp;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
    
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
