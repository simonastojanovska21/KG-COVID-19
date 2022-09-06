package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Disease {

    private String mondoId;

    private String diseaseUrl;

    private String name;

    private String description;

    private List<String> synonyms;
}
