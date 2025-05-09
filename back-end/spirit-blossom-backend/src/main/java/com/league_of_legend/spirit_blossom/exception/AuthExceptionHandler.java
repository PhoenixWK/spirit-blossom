package com.league_of_legend.spirit_blossom.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.league_of_legend.spirit_blossom.dto.AuthErrorResponse;

@ControllerAdvice
public class AuthExceptionHandler {

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<AuthErrorResponse> handleMissingParamsException(MissingServletRequestParameterException exc) {
        AuthErrorResponse authErrorResponse = new AuthErrorResponse();

        authErrorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        authErrorResponse.setMessage("Missing required parameters!");
        authErrorResponse.setErrorCode("MISSING_PARAMETERS");

        return new ResponseEntity<>(authErrorResponse, HttpStatus.BAD_REQUEST);
    }
}