package com.example.backend.service.impl;

import com.example.backend.model.Category;
import com.example.backend.service.CategoriesService;
import com.example.backend.service.QueryService;
import com.example.backend.utils.SPARQLQueries;
import lombok.AllArgsConstructor;
import org.apache.jena.query.ResultSet;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CategoriesServiceImpl implements CategoriesService {

    private final QueryService queryService;

    @Override
    public List<Category> getAllCategories() {
        List<Category> categories = new ArrayList<>();
        ResultSet resultSet = queryService.executeQueryUsingCovidSPARQLEndpoint(SPARQLQueries.countAllCategories);
        resultSet.forEachRemaining(each->{
            BigInteger count = BigInteger.valueOf(each.get("count").asLiteral().getInt());
            String categoryURI = each.get("category").asResource().getLocalName();
            categories.add(new Category(count,categoryURI));
        });
        return categories.stream().sorted(Comparator.comparing(Category::getCount, Comparator.reverseOrder())).collect(Collectors.toList());
    }
}
