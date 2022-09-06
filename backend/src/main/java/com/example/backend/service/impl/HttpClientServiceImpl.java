package com.example.backend.service.impl;

import com.example.backend.model.dto.MolecularActivityRelation;
import com.example.backend.service.HttpClientService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.groupingBy;

@Service
@AllArgsConstructor
public class HttpClientServiceImpl implements HttpClientService {

    @Override
    public Map<String, List<MolecularActivityRelation>> getRelationsForMolecularActivity(String goId) throws IOException, InterruptedException {
        ObjectMapper mapper = new ObjectMapper();
        HttpClient client = HttpClient.newHttpClient();

        String URL = "https://www.ebi.ac.uk/QuickGO/services/ontology/go/terms/"+goId+"/children";
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(URL)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        JsonNode results = mapper.readTree(response.body()).get("results");
        if(results.get(0).get("children")== null) {
            return new HashMap<>();
        }
        String relations = results.get(0).get("children").toString();
        List<MolecularActivityRelation> molecularActivityRelations = mapper.readValue(relations,
                new TypeReference<>() {});
        Map<String, List<MolecularActivityRelation>> relationsMap = molecularActivityRelations.stream().collect(groupingBy(MolecularActivityRelation::getRelation));
        relationsMap.remove("is_a");
        return relationsMap;
    }
}
