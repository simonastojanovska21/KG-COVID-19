package com.example.backend.service;

import com.example.backend.model.dto.MolecularActivityRelation;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface HttpClientService {
    Map<String, List<MolecularActivityRelation>> getRelationsForMolecularActivity(String goId) throws IOException, InterruptedException;
}
