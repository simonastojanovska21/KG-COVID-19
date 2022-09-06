package com.example.backend.web;

import com.example.backend.model.Protein;
import com.example.backend.service.ProteinService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.ebi.uniprot.dataservice.client.exception.ServiceException;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/proteins")
public class ProteinController {

    private final ProteinService proteinService;

    @GetMapping
    public String getProteinAbstract(){
        return this.proteinService.getProteinAbstract();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Protein> getDetailsAboutProtein(@PathVariable String name){
        try {
            return this.proteinService.getDetailsAboutProtein(name)
                    .map(protein -> ResponseEntity.ok().body(protein))
                    .orElseGet(()->ResponseEntity.badRequest().build());
        } catch (ServiceException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }
}
