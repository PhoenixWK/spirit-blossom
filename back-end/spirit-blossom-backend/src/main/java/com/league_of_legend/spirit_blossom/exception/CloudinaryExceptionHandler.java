package com.league_of_legend.spirit_blossom.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import com.league_of_legend.spirit_blossom.dto.CloudinaryImageErrorResponse;

@ControllerAdvice
public class CloudinaryExceptionHandler {

    @ExceptionHandler(CloudinaryException.class)
    public ResponseEntity<CloudinaryImageErrorResponse> handleCloudinaryException(CloudinaryException exc) {
        CloudinaryImageErrorResponse error = new CloudinaryImageErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setErrorCode(exc.getErrorCode());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<CloudinaryImageErrorResponse> handleMissingParamException(MissingServletRequestParameterException exc) {
        CloudinaryImageErrorResponse error = new CloudinaryImageErrorResponse();
        
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage("Required parameter '" + exc.getParameterName() + "' is missing");
        error.setErrorCode("MISSING_PARAMETER");
        
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<CloudinaryImageErrorResponse> handleTypeMismatchException(MethodArgumentTypeMismatchException exc) {
        CloudinaryImageErrorResponse error = new CloudinaryImageErrorResponse();
        
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage("Parameter '" + exc.getName() + "' has invalid value: " + exc.getValue());
        error.setErrorCode("INVALID_PARAMETER");
        
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<CloudinaryImageErrorResponse> handleGenericException(Exception exc) {
        CloudinaryImageErrorResponse error = new CloudinaryImageErrorResponse();
        
        error.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        error.setMessage("An unexpected error occurred: " + exc.getMessage());
        error.setErrorCode("INTERNAL_ERROR");
        
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
