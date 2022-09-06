package com.example.backend.web;

import com.example.backend.model.MolecularActivity;
import com.example.backend.model.exceptions.MolecularActivityDoesNotExist;
import com.example.backend.service.MolecularActivityService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/molecularActivity")
public class MolecularActivityController {

    private final MolecularActivityService molecularActivityService;

    @GetMapping
    public String getMolecularActivityAbstract(){
        return this.molecularActivityService.getMolecularActivityAbstract();
    }

    @GetMapping("/{name}")
    public ResponseEntity<MolecularActivity> getDetailsAboutMolecularActivity(@PathVariable String name) {
        try{
            return this.molecularActivityService.getDetailsAboutMolecularActivity(name)
                    .map(molecularActivity -> ResponseEntity.ok().body(molecularActivity))
                    .orElseGet(()->ResponseEntity.badRequest().build());
        }catch (MolecularActivityDoesNotExist | IOException | InterruptedException  e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }
}
