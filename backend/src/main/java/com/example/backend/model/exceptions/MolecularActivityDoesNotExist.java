package com.example.backend.model.exceptions;

public class MolecularActivityDoesNotExist extends RuntimeException{
    public MolecularActivityDoesNotExist(String message){
        super(message);
    }
}
