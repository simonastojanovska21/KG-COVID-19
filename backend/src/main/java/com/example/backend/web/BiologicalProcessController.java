package com.example.backend.web;

import com.example.backend.model.BiologicalProcess;
import com.example.backend.model.exceptions.BiologicalProcessDoesNotExist;
import com.example.backend.service.BiologicalProcessService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/biologicalProcess")
public class BiologicalProcessController {

    private final BiologicalProcessService biologicalProcessService;

    @GetMapping
    public String getBiologicalProcessAbstract(){
        return this.biologicalProcessService.getBiologicalProcessAbstract();
    }

    @GetMapping("/{name}")
    public ResponseEntity<BiologicalProcess> getDetailsAboutBiologicalProcess(@PathVariable String name){
        try {
            return this.biologicalProcessService.getDetailsAboutBiologicalProcess(name)
                    .map(biologicalProcess -> ResponseEntity.ok().body(biologicalProcess))
                    .orElseGet(()->ResponseEntity.badRequest().build());
        }catch (BiologicalProcessDoesNotExist e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }
}
