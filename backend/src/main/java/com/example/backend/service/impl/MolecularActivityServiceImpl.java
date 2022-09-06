package com.example.backend.service.impl;

import com.example.backend.model.MolecularActivity;
import com.example.backend.model.dto.MolecularActivityRelation;
import com.example.backend.model.exceptions.MolecularActivityDoesNotExist;
import com.example.backend.service.HttpClientService;
import com.example.backend.service.MolecularActivityService;
import com.example.backend.service.QueryService;
import com.example.backend.utils.FormatStrings;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MolecularActivityServiceImpl implements MolecularActivityService {

    private final QueryService queryService;

    private final HttpClientService httpClientService;

    @Override
    public Optional<MolecularActivity> getDetailsAboutMolecularActivity(String molecularActivityName) throws IOException, InterruptedException,MolecularActivityDoesNotExist {
        String goId, molecularActivityUrl, name, description;
        List<String> synonyms = new ArrayList<>();
        List<String> negatively_regulates = new ArrayList<>();
        List<String> positively_regulates = new ArrayList<>();
        List<String> regulates = new ArrayList<>();
        List<String> capable_of = new ArrayList<>();
        ResultSet resultSet = this.queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.getMolecularActivityDetailsQuery(molecularActivityName));
        if(!resultSet.hasNext())
            throw new MolecularActivityDoesNotExist("Molecular activity with that name could not be found.");
        QuerySolution querySolution = resultSet.nextSolution();
        Resource molecularActivity = querySolution.get("activity").asResource();
        goId = FormatStrings.formatIDs(molecularActivity.getLocalName());
        molecularActivityUrl = molecularActivity.toString();
        name = FormatStrings.formatNames(querySolution.get("name").toString());
        description = querySolution.get("description").toString();
        synonyms.add(querySolution.get("synonym").toString());
        resultSet.forEachRemaining(each-> synonyms.add(each.get("synonym").toString()));
        Map<String, List<MolecularActivityRelation>> relationsMap = this.httpClientService.getRelationsForMolecularActivity(goId);
        if(relationsMap.containsKey("negatively_regulates"))
            negatively_regulates = relationsMap.get("negatively_regulates").stream().map(MolecularActivityRelation::getName).collect(Collectors.toList());
        if(relationsMap.containsKey("positively_regulates"))
            positively_regulates = relationsMap.get("positively_regulates").stream().map(MolecularActivityRelation::getName).collect(Collectors.toList());
        if(relationsMap.containsKey("regulates"))
            regulates = relationsMap.get("regulates").stream().map(MolecularActivityRelation::getName).collect(Collectors.toList());
        if(relationsMap.containsKey("capable_of"))
            capable_of = relationsMap.get("capable_of").stream().map(MolecularActivityRelation::getName).collect(Collectors.toList());
        return Optional.of(new MolecularActivity(goId,molecularActivityUrl,name,description,synonyms,
                negatively_regulates,positively_regulates,regulates,capable_of));
    }

    @Override
    public String getMolecularActivityAbstract() {
        return "A molecular process that can be carried out by the action of a single macromolecular machine, usually " +
                "via direct physical interactions with other molecular entities. Function in this sense denotes an action, " +
                "or activity, that a gene product (or a complex) performs. These actions are described from two distinct but " +
                "related perspectives: (1) biochemical activity, and (2) role as a component in a larger system/process.";
    }
}
