package com.example.backend.service;

import com.example.backend.model.ChemicalSubstance;
import com.example.backend.model.exceptions.ChemicalSubstanceDoesNotExist;
import uk.ac.ebi.chebi.webapps.chebiWS.model.ChebiWebServiceFault_Exception;

import java.util.Optional;

public interface ChemicalSubstanceService {
    Optional<ChemicalSubstance> getDetailsAboutChemicalSubstance(String name) throws ChebiWebServiceFault_Exception, ChemicalSubstanceDoesNotExist;
    String getChemicalSubstanceAbstract();
}
