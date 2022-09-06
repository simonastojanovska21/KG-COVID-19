package com.example.backend.service;

import com.example.backend.model.Publication;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface PublicationService {
    List<Publication> getAllPublications();
    void addNewPublication(String publicationId, BigInteger numberOfEntitiesFromPublication,
                           String publicationFromCategory, String publicationLabel);
    void addPublicationsForCategory(String category);
    void addNewPublicationSuggestion(String name, String authorsNames, String url, String description);
}
