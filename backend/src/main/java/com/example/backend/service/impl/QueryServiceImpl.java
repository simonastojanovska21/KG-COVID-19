package com.example.backend.service.impl;

import com.example.backend.service.QueryService;
import lombok.AllArgsConstructor;
import org.apache.jena.query.*;
import org.springframework.stereotype.Service;

import static com.example.backend.utils.SPARQLQueries.CovidSPARQLEndpoint;
import static com.example.backend.utils.SPARQLQueries.DbpediaSPARQLEndpoint;
@Service
@AllArgsConstructor
public class QueryServiceImpl implements QueryService {

    @Override
    public ResultSet executeQueryUsingCovidSPARQLEndpoint(String queryString) {
        Query query = QueryFactory.create(queryString);
        QueryExecution queryExecution = QueryExecutionFactory.sparqlService(CovidSPARQLEndpoint,query);
        return queryExecution.execSelect();
    }

    @Override
    public ResultSet executeQueryUsingDbpediaSPARQLEndpoint(String queryString) {
        Query query = QueryFactory.create(queryString);
        QueryExecution queryExecution = QueryExecutionFactory.sparqlService(DbpediaSPARQLEndpoint, query);
        return queryExecution.execSelect();
    }

}
