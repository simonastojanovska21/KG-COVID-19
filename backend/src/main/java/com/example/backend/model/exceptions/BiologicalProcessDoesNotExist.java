package com.example.backend.model.exceptions;

public class BiologicalProcessDoesNotExist extends RuntimeException{
    public BiologicalProcessDoesNotExist(String message){
        super(message);
    }
}
