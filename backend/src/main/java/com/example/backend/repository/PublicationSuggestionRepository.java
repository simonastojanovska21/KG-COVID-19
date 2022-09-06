package com.example.backend.repository;

import com.example.backend.model.PublicationSuggestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicationSuggestionRepository extends JpaRepository<PublicationSuggestion,Long> {
}
