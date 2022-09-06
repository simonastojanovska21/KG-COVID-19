package com.example.backend.web;

import com.example.backend.model.ChemicalSubstance;
import com.example.backend.model.exceptions.ChemicalSubstanceDoesNotExist;
import com.example.backend.service.ChemicalSubstanceService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.ebi.chebi.webapps.chebiWS.model.ChebiWebServiceFault_Exception;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/chemicalSubstances")
public class ChemicalSubstanceController {

    private final ChemicalSubstanceService chemicalSubstanceService;

    @GetMapping
    public String getChemicalSubstanceAbstract(){
        return chemicalSubstanceService.getChemicalSubstanceAbstract();
    }

    @GetMapping("/{name}")
    public ResponseEntity<ChemicalSubstance> getDetailsAboutChemicalSubstance(@PathVariable String name) {
        try{
            return this.chemicalSubstanceService.getDetailsAboutChemicalSubstance(name)
                    .map(chemicalSubstance -> ResponseEntity.ok().body(chemicalSubstance))
                    .orElseGet(()->ResponseEntity.badRequest().build());
        } catch (ChebiWebServiceFault_Exception | ChemicalSubstanceDoesNotExist e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }
}
