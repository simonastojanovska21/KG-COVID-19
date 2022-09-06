package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uk.ac.ebi.kraken.model.uniprot.comments.DiseaseImpl;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Protein {

    private String uniProtId;

    private String proteinUrl;

    private String proteinName;

    List<String> functions;

    List<String> catalyticActivity;

    List<String> cofactors;

    List<String> subunit;

    List<String> subCellularLocation;

    List<DiseaseImpl> diseases;
}
