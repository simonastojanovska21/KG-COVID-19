package com.example.backend.service;

import com.example.backend.model.Gene;
import com.example.backend.model.exceptions.GeneDoesNotExist;

import java.util.Optional;

public interface GeneService {
    Optional<Gene> getDetailsAboutGene(String geneName) throws GeneDoesNotExist;
    String getGeneAbstract();
}
