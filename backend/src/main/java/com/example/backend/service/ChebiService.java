package com.example.backend.service;

import uk.ac.ebi.chebi.webapps.chebiWS.model.ChebiWebServiceFault_Exception;
import uk.ac.ebi.chebi.webapps.chebiWS.model.Entity;

import java.util.List;
import java.util.Map;

public interface ChebiService {
    Entity getChebiEntity(String chebiId) throws ChebiWebServiceFault_Exception;
    Map<String, String> getSimilarEntities(String molFile) throws ChebiWebServiceFault_Exception;
    Map<String, String> getCompoundsWhichContainEntity(String molFile) throws ChebiWebServiceFault_Exception;
}
