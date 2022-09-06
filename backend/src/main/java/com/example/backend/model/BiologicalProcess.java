package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BiologicalProcess {

    private String goId;

    private String biologicalProcessUrl;

    private String name;

    private String description;

    private List<String> synonyms;
}
