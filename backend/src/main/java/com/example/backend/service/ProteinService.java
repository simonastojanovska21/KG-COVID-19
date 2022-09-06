package com.example.backend.service;

import com.example.backend.model.Protein;
import com.example.backend.model.exceptions.ProteinDoesNotExist;
import uk.ac.ebi.uniprot.dataservice.client.exception.ServiceException;

import java.util.List;
import java.util.Optional;

public interface ProteinService {
    Optional<Protein> getDetailsAboutProtein(String name) throws ServiceException, ProteinDoesNotExist;
    String getProteinAbstract();
}
