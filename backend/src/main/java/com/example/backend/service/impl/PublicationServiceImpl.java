package com.example.backend.service.impl;

import com.example.backend.model.Publication;
import com.example.backend.model.PublicationSuggestion;
import com.example.backend.repository.PublicationRepository;
import com.example.backend.repository.PublicationSuggestionRepository;
import com.example.backend.service.PublicationService;
import com.example.backend.service.QueryService;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;

@Service
@AllArgsConstructor
public class PublicationServiceImpl implements PublicationService {

    private final QueryService queryService;
    private final PublicationRepository publicationRepository;

    private final PublicationSuggestionRepository publicationSuggestionRepository;

    @Override
    public List<Publication> getAllPublications() {
        return this.publicationRepository.findAll();
    }

    @Override
    public void addNewPublication(String publicationId, BigInteger numberOfEntitiesFromPublication,
                                  String publicationFromCategory, String publicationLabel) {
        Publication publication = new Publication(publicationId,numberOfEntitiesFromPublication,
                publicationFromCategory,publicationLabel);
        this.publicationRepository.save(publication);
    }

    @Override
    public void addPublicationsForCategory(String category) {
        queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.generatePublicationQueryDynamically(category)).forEachRemaining(result->{
            BigInteger numberOfEntitiesFromPublication = BigInteger.valueOf(result.get("count").asLiteral().getInt());
            String publicationId = result.get("publication").toString();
            String publicationLabel = result.get("publicationLabel").toString();
            this.addNewPublication(publicationId,numberOfEntitiesFromPublication,category,publicationLabel);
        });
    }

    @Override
    public void addNewPublicationSuggestion(String name, String authorsNames, String url, String description) {
        PublicationSuggestion publicationSuggestion = new PublicationSuggestion(name,authorsNames,url,description);
        this.publicationSuggestionRepository.save(publicationSuggestion);
    }

}
