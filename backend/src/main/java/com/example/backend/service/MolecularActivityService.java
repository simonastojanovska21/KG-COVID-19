package com.example.backend.service;

import com.example.backend.model.MolecularActivity;
import com.example.backend.model.exceptions.MolecularActivityDoesNotExist;

import java.io.IOException;
import java.util.Optional;

public interface MolecularActivityService {
    Optional<MolecularActivity> getDetailsAboutMolecularActivity(String molecularActivityName) throws IOException, InterruptedException, MolecularActivityDoesNotExist;

    String getMolecularActivityAbstract();
}
