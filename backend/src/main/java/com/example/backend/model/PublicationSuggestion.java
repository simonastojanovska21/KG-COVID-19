package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PublicationSuggestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String authorsNames;

    private String url;

    @Column(length = 2048)
    private String description;

    public PublicationSuggestion(String name, String authorsNames, String url, String description) {
        this.name = name;
        this.authorsNames = authorsNames;
        this.url = url;
        this.description = description;
    }
}
