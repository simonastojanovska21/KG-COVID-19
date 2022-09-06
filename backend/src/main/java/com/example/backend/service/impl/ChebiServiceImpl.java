package com.example.backend.service.impl;

import com.example.backend.service.ChebiService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import uk.ac.ebi.chebi.webapps.chebiWS.client.ChebiWebServiceClient;
import uk.ac.ebi.chebi.webapps.chebiWS.model.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ChebiServiceImpl implements ChebiService {

    @Override
    public Entity getChebiEntity(String chebiId) throws ChebiWebServiceFault_Exception {
        ChebiWebServiceClient client = new ChebiWebServiceClient();
        return client.getCompleteEntity(chebiId);
    }

    @Override
    public Map<String, String> getSimilarEntities(String molFile) throws ChebiWebServiceFault_Exception {
        ChebiWebServiceClient client = new ChebiWebServiceClient();
        Map<String, String> map = new HashMap<>();
        client.getStructureSearch(molFile, StructureType.MOLFILE,
                                                  StructureSearchCategory.SIMILARITY,
                                        6,0.70F)
                .getListElement().forEach(each-> map.put(each.getChebiId(), each.getChebiAsciiName()));
        return map;
    }

    @Override
    public Map<String, String> getCompoundsWhichContainEntity(String molFile) throws ChebiWebServiceFault_Exception {
        ChebiWebServiceClient client = new ChebiWebServiceClient();
        Map<String, String> map = new HashMap<>();
        client.getStructureSearch(molFile, StructureType.MOLFILE,
                        StructureSearchCategory.SUBSTRUCTURE,
                        6,0.70F)
                .getListElement().forEach(each-> map.put(each.getChebiId(), each.getChebiAsciiName()));
        return map;
    }
}
