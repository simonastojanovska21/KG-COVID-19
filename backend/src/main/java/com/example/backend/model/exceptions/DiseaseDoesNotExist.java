package com.example.backend.model.exceptions;

public class DiseaseDoesNotExist extends RuntimeException{
    public DiseaseDoesNotExist(String message){
        super(message);
    }
}
