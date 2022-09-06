package com.example.backend.model.exceptions;

public class ProteinDoesNotExist extends RuntimeException{
    public ProteinDoesNotExist(String message){
        super(message);
    }
}
