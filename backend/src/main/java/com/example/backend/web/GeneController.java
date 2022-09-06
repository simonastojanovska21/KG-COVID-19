package com.example.backend.web;

import com.example.backend.model.Gene;
import com.example.backend.model.exceptions.GeneDoesNotExist;
import com.example.backend.service.GeneService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/gene")
public class GeneController {

    private final GeneService geneService;

    @GetMapping
    public String getGeneAbstract(){
        return this.geneService.getGeneAbstract();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Gene> getDetailsAboutGene(@PathVariable String name){
        try {
            return this.geneService.getDetailsAboutGene(name)
                    .map(gene -> ResponseEntity.ok().body(gene))
                    .orElseGet(()->ResponseEntity.badRequest().build());
        }catch (GeneDoesNotExist e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }
}
