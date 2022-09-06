package com.example.backend.web;

import com.example.backend.model.Category;
import com.example.backend.service.CategoriesService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
@RequestMapping("/api/categories")
public class CategoriesController {

    private final CategoriesService categoriesService;

    @GetMapping
    public List<Category> getAllCategories(){
        return this.categoriesService.getAllCategories();
    }
}
