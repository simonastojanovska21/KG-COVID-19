package com.example.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MolecularActivityRelation {
    @JsonProperty("id")
    private String goId;

    @JsonProperty("name")
    private String name;

    @JsonProperty("relation")
    private String relation;

    private boolean hasChildren;
}
