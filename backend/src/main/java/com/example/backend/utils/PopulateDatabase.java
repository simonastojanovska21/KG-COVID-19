package com.example.backend.utils;

import com.example.backend.repository.PublicationRepository;
import com.example.backend.service.ChemicalSubstanceService;
import com.example.backend.service.PublicationService;
import com.example.backend.service.QueryService;
import com.example.backend.service.UniProteinService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import uk.ac.ebi.uniprot.dataservice.client.exception.ServiceException;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
@Component
@AllArgsConstructor
public class PopulateDatabase {
    private final PublicationService publicationService;
    private final UniProteinService uniProteinService;

    private final static List<String> publicationCategories = Arrays.asList("bl:Drug","bl:Gene","bl:MolecularActivity",
            "bl:BiologicalProcess","bl:PhenotypicFeature");
    @PostConstruct
    private void initData() throws ServiceException {
        if(this.publicationService.getAllPublications().isEmpty()){
            publicationCategories.forEach(publicationService::addPublicationsForCategory);
        }
    }
}
