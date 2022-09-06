package com.example.backend.service;

import com.example.backend.model.Disease;
import com.example.backend.model.exceptions.DiseaseDoesNotExist;

import java.util.Optional;

public interface DiseaseService {
    Optional<Disease> getDetailsAboutDisease(String diseaseName) throws DiseaseDoesNotExist;
    String getDiseaseAbstract();
}
