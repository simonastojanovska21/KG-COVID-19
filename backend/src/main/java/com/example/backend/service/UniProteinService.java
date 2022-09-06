package com.example.backend.service;

import uk.ac.ebi.kraken.interfaces.uniprot.UniProtEntry;
import uk.ac.ebi.kraken.model.uniprot.comments.DiseaseImpl;
import uk.ac.ebi.uniprot.dataservice.client.exception.ServiceException;

import java.util.List;

public interface UniProteinService {
    UniProtEntry getProteinEntityFromUniProt(String proteinId) throws ServiceException;
    List<String> getFunctionComments( UniProtEntry entry);
    List<String> getCatalyticActivityComments( UniProtEntry entry);
    List<String> getCofactorComments( UniProtEntry entry);
    List<String> getSubunitComments( UniProtEntry entry);
    List<String> getSubCellularLocationComments( UniProtEntry entry);
    List<DiseaseImpl> getDiseaseComments(UniProtEntry entry);
}
