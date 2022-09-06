package com.example.backend.service.impl;

import com.example.backend.model.BiologicalProcess;
import com.example.backend.model.enums.DbrCategories;
import com.example.backend.model.exceptions.BiologicalProcessDoesNotExist;
import com.example.backend.service.BiologicalProcessService;
import com.example.backend.service.QueryService;
import com.example.backend.utils.FormatStrings;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Resource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BiologicalProcessServiceImpl implements BiologicalProcessService {

    private final QueryService queryService;

    @Override
    public Optional<BiologicalProcess> getDetailsAboutBiologicalProcess(String biologicalProcessName) throws BiologicalProcessDoesNotExist {
        String goId, biologicalProcessUrl, name, description;
        List<String> synonyms = new ArrayList<>();
        ResultSet resultSet = this.queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.getBiologicalProcessDetailsQuery(biologicalProcessName));
        if(!resultSet.hasNext())
            throw new BiologicalProcessDoesNotExist("Biological process with that name could not be found.");
        QuerySolution querySolution = resultSet.nextSolution();
        Resource biologicalProcess = querySolution.get("process").asResource();
        goId = FormatStrings.formatIDs(biologicalProcess.getLocalName());
        biologicalProcessUrl = biologicalProcess.toString();
        name = FormatStrings.formatNames(querySolution.get("name").toString());
        description = querySolution.get("description").toString();
        synonyms.add(querySolution.get("synonym").toString());
        resultSet.forEachRemaining(each-> synonyms.add(each.get("synonym").toString()));
        return Optional.of(new BiologicalProcess(goId,biologicalProcessUrl,name,description,synonyms));
    }

    @Override
    public String getBiologicalProcessAbstract() {
        ResultSet resultSet = queryService
                .executeQueryUsingDbpediaSPARQLEndpoint(SPARQLQueries.getAbstractForCategoryQuery(DbrCategories.Biological_process.toString()));
        QuerySolution querySolution = resultSet.nextSolution();
        return querySolution.get("abstract").toString().replace("@en","");
    }
}
