package com.example.backend.service.impl;

import com.example.backend.model.Protein;
import com.example.backend.model.enums.DbrCategories;
import com.example.backend.model.exceptions.ProteinDoesNotExist;
import com.example.backend.service.ProteinService;
import com.example.backend.service.QueryService;
import com.example.backend.service.UniProteinService;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Resource;
import org.springframework.stereotype.Service;
import uk.ac.ebi.kraken.interfaces.uniprot.UniProtEntry;
import uk.ac.ebi.kraken.model.uniprot.comments.DiseaseImpl;
import uk.ac.ebi.uniprot.dataservice.client.exception.ServiceException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProteinServiceImpl implements ProteinService {

    private final QueryService queryService;
    private final UniProteinService uniProteinService;

    @Override
    public Optional<Protein> getDetailsAboutProtein(String name) throws ServiceException, ProteinDoesNotExist {
        String uniProtId, proteinUrl, proteinName;
        List<String> functions;
        List<String> catalyticActivity;
        List<String> cofactors;
        List<String> subunit;
        List<String> subCellularLocation;
        List<DiseaseImpl> diseases;
        ResultSet resultSet = this.queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.getProteinDetailsQuery(name));
        if (!resultSet.hasNext())
            throw new ProteinDoesNotExist("Protein with that name could not be found.");
        QuerySolution querySolution = resultSet.nextSolution();
        Resource protein = querySolution.get("protein").asResource();
        uniProtId = protein.getLocalName();
        proteinUrl = protein.toString();
        proteinName = querySolution.get("name").toString();
        UniProtEntry proteinEntry = this.uniProteinService.getProteinEntityFromUniProt(uniProtId);
        functions = this.uniProteinService.getFunctionComments(proteinEntry);
        catalyticActivity = this.uniProteinService.getCatalyticActivityComments(proteinEntry);
        cofactors = this.uniProteinService.getCofactorComments(proteinEntry);
        subunit = this.uniProteinService.getSubunitComments(proteinEntry);
        subCellularLocation = this.uniProteinService.getSubCellularLocationComments(proteinEntry);
        diseases = this.uniProteinService.getDiseaseComments(proteinEntry);
        return Optional.of(new Protein(uniProtId,proteinUrl,proteinName,functions,catalyticActivity,cofactors,
                subunit,subCellularLocation,diseases));
    }

    @Override
    public String getProteinAbstract() {
        ResultSet resultSet = queryService
                .executeQueryUsingDbpediaSPARQLEndpoint(SPARQLQueries.getAbstractForCategoryQuery(DbrCategories.Protein.toString()));
        QuerySolution querySolution = resultSet.nextSolution();
        return querySolution.get("abstract").toString().replace("@en","");
    }
}
