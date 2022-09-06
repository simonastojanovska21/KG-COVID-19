package com.example.backend.model.exceptions;

public class GeneDoesNotExist extends RuntimeException{
    public GeneDoesNotExist(String message){
        super(message);
    }
}
