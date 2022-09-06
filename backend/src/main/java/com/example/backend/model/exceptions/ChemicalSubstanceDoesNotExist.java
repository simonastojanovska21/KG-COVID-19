package com.example.backend.model.exceptions;

public class ChemicalSubstanceDoesNotExist extends RuntimeException{
    public ChemicalSubstanceDoesNotExist(String message){
        super(message);
    }
}
