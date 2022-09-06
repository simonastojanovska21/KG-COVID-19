package com.example.backend.service.impl;

import com.example.backend.model.Disease;
import com.example.backend.model.enums.DbrCategories;
import com.example.backend.model.exceptions.DiseaseDoesNotExist;
import com.example.backend.service.DiseaseService;
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
public class DiseaseServiceImpl implements DiseaseService {

    private QueryService queryService;

    @Override
    public Optional<Disease> getDetailsAboutDisease(String diseaseName) throws DiseaseDoesNotExist {
        String mondoId, diseaseUrl, name, description;
        List<String> synonyms = new ArrayList<>();
        ResultSet resultSet = this.queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.getDiseaseDetailsQuery(diseaseName));
        if(!resultSet.hasNext())
            throw new DiseaseDoesNotExist("Disease with that name could not be found.");
        QuerySolution querySolution = resultSet.nextSolution();
        Resource disease = querySolution.get("disease").asResource();
        mondoId = disease.getLocalName();
        diseaseUrl = disease.toString();
        name = FormatStrings.formatNames(querySolution.get("name").toString());
        description = querySolution.get("description").toString();
        synonyms.add(querySolution.get("synonym").toString());
        resultSet.forEachRemaining(each-> synonyms.add(each.get("synonym").toString()));
        return Optional.of(new Disease(mondoId,diseaseUrl,name,description,synonyms));
    }

    @Override
    public String getDiseaseAbstract() {
        ResultSet resultSet = queryService
                .executeQueryUsingDbpediaSPARQLEndpoint(SPARQLQueries.getAbstractForCategoryQuery(DbrCategories.Disease.toString()));
        QuerySolution querySolution = resultSet.nextSolution();
        return querySolution.get("abstract").toString().replace("@en","");
    }
}

