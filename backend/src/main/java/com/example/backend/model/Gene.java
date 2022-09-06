package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Gene {
    private String geneId;

    private String geneUrl;

    private String name;

    private String description;
}
