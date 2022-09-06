package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MolecularActivity {

    private String goId;

    private String molecularActivityUrl;

    private String name;

    private String description;

    private List<String> synonyms;

    private List<String> negatively_regulates;

    private List<String> positively_regulates;

    private List<String> regulates;

    private List<String> capable_of;
}
