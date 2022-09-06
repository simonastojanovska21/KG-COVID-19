package com.example.backend.web;

import com.example.backend.model.dto.PublicationSuggestionDTO;
import com.example.backend.model.Publication;
import com.example.backend.service.PublicationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.groupingBy;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/publications")
public class PublicationsController {

    private final PublicationService publicationService;

    @GetMapping
    public Map<String, List<Publication>> getAllPublicationsByCategory() throws JsonProcessingException {
        return publicationService.getAllPublications().stream().collect(groupingBy(Publication::getPublicationFromCategory));
    }

    @PostMapping("/addSuggestion")
    public void addNewPublicationSuggestion(@RequestBody PublicationSuggestionDTO publicationSuggestionDTO){
        this.publicationService.addNewPublicationSuggestion(publicationSuggestionDTO.getName(),
                publicationSuggestionDTO.getAuthorsNames(),publicationSuggestionDTO.getUrl(),
                publicationSuggestionDTO.getDescription());
    }
}