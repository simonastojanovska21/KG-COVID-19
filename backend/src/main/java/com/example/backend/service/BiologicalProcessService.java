package com.example.backend.service;

import com.example.backend.model.BiologicalProcess;
import com.example.backend.model.exceptions.BiologicalProcessDoesNotExist;

import java.util.Optional;

public interface BiologicalProcessService {
    Optional<BiologicalProcess> getDetailsAboutBiologicalProcess(String biologicalProcessName) throws BiologicalProcessDoesNotExist;
    String getBiologicalProcessAbstract();
}
