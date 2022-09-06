package com.example.backend.service.impl;

import com.example.backend.model.Gene;
import com.example.backend.model.enums.DbrCategories;
import com.example.backend.model.exceptions.GeneDoesNotExist;
import com.example.backend.service.GeneService;
import com.example.backend.service.QueryService;
import com.example.backend.utils.FormatStrings;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Resource;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class GeneServiceImpl implements GeneService {

    private QueryService queryService;

    @Override
    public Optional<Gene> getDetailsAboutGene(String geneName) throws GeneDoesNotExist {
        String geneId, geneUrl, name, description;
        ResultSet resultSet = this.queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.getGeneDetailsQuery(geneName));
        if(!resultSet.hasNext())
            throw new GeneDoesNotExist("Gene with that name could not be found");
        QuerySolution querySolution = resultSet.nextSolution();
        Resource gene = querySolution.get("geneUrl").asResource();
        geneId = gene.getLocalName();
        geneUrl = gene.toString();
        name = querySolution.get("name").toString();
        description = querySolution.get("description").toString();
        return Optional.of(new Gene(geneId,geneUrl,name,description));
    }

    @Override
    public String getGeneAbstract() {
        ResultSet resultSet = queryService
                .executeQueryUsingDbpediaSPARQLEndpoint(SPARQLQueries.getAbstractForCategoryQuery(DbrCategories.Gene.toString()));
        QuerySolution querySolution = resultSet.nextSolution();
        return querySolution.get("abstract").toString().replace("@en","");
    }
}
