package com.league_of_legend.spirit_blossom.exception;

public class CloudinaryException extends RuntimeException {
    private final String errorCode;
    
    public CloudinaryException(String message) {
        super(message);
        this.errorCode = "CLOUDINARY_ERROR";
    }
    
    public CloudinaryException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }
    
    public String getErrorCode() {
        return errorCode;
    }
}
