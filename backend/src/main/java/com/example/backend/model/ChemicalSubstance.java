package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ChemicalSubstance {

    private String chebiId;

    private String chemicalSubstanceUrl;

    private String chemicalSubstanceName;

    private String definition;

    private String chemicalFormula;

    private List<String> interactsWithProteins;

    private List<String> synonyms;

    private Map<String, String> similarChemicalSubstances;

    private Map<String, String> compoundWhichContainTheChemicalSubstances;
}
