package com.example.backend.web;

import com.example.backend.model.BiologicalProcess;
import com.example.backend.model.Disease;
import com.example.backend.model.exceptions.DiseaseDoesNotExist;
import com.example.backend.service.DiseaseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/disease")
public class DiseaseController {

    private final DiseaseService diseaseService;

    @GetMapping
    public String getDiseaseAbstract(){
        return this.diseaseService.getDiseaseAbstract();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Disease> getDetailsAboutDisease(@PathVariable String name){
        try {
            return this.diseaseService.getDetailsAboutDisease(name)
                    .map(disease -> ResponseEntity.ok().body(disease))
                    .orElseGet(()->ResponseEntity.badRequest().build());
        }catch (DiseaseDoesNotExist e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }
}
