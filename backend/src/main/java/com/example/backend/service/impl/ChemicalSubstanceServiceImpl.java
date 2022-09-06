package com.example.backend.service.impl;

import com.example.backend.model.ChemicalSubstance;
import com.example.backend.model.enums.DbrCategories;
import com.example.backend.model.exceptions.ChemicalSubstanceDoesNotExist;
import com.example.backend.service.ChebiService;
import com.example.backend.service.ChemicalSubstanceService;
import com.example.backend.service.QueryService;
import com.example.backend.utils.FormatStrings;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Resource;
import org.springframework.stereotype.Service;
import uk.ac.ebi.chebi.webapps.chebiWS.model.ChebiWebServiceFault_Exception;
import uk.ac.ebi.chebi.webapps.chebiWS.model.Entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ChemicalSubstanceServiceImpl implements ChemicalSubstanceService {
    private final ChebiService chebiService;
    private final QueryService queryService;

    @Override
    public Optional<ChemicalSubstance> getDetailsAboutChemicalSubstance(String name) throws ChebiWebServiceFault_Exception,ChemicalSubstanceDoesNotExist {
        String chebiId, chemicalSubstanceUrl, chemicalSubstanceName, definition, chemicalFormula;
        List<String> interactsWithProteins = new ArrayList<>();
        List<String> synonyms = new ArrayList<>();
        Map<String, String> similarChemicalSubstances;
        Map<String, String> compoundWhichContainTheChemicalSubstances;
        ResultSet resultSet = this.queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.getChemicalSubstanceDetailsQuery(name));
        if(!resultSet.hasNext())
            throw new ChemicalSubstanceDoesNotExist("Chemical substance with that name could not be found.");
        QuerySolution querySolution =resultSet.next();
        Resource chemicalSubstance = querySolution.get("substance").asResource();
        chebiId = FormatStrings.formatIDs(chemicalSubstance.getLocalName());
        chemicalSubstanceUrl = chemicalSubstance.toString();
        chemicalSubstanceName = FormatStrings.formatNames(querySolution.get("substanceName").toString());
        interactsWithProteins.add(querySolution.get("proteinName").toString());
        resultSet.forEachRemaining(each-> interactsWithProteins.add(each.get("proteinName").toString()));

        Entity entity = this.chebiService.getChebiEntity(chebiId);
        definition = entity.getDefinition();
        chemicalFormula = entity.getFormulae().get(0).getData();
        entity.getSynonyms().forEach(each->synonyms.add(each.getData()));
        String molFile = entity.getChemicalStructures().get(0).getStructure();
        similarChemicalSubstances = this.chebiService.getSimilarEntities(molFile);
        compoundWhichContainTheChemicalSubstances = this.chebiService.getCompoundsWhichContainEntity(molFile);
        return Optional.of(new ChemicalSubstance(chebiId,chemicalSubstanceUrl,chemicalSubstanceName,definition,
                chemicalFormula,interactsWithProteins, synonyms, similarChemicalSubstances, compoundWhichContainTheChemicalSubstances));
    }

    @Override
    public String getChemicalSubstanceAbstract() {
        ResultSet resultSet = queryService
                .executeQueryUsingDbpediaSPARQLEndpoint(SPARQLQueries.getAbstractForCategoryQuery(DbrCategories.Chemical_substance.toString()));
        QuerySolution querySolution = resultSet.nextSolution();
        return querySolution.get("abstract").toString().replace("@en","");
    }
}
