package com.example.backend.service;

import org.apache.jena.query.ResultSet;

public interface QueryService {
    ResultSet executeQueryUsingCovidSPARQLEndpoint(String queryString);
    ResultSet executeQueryUsingDbpediaSPARQLEndpoint(String queryString);
}
