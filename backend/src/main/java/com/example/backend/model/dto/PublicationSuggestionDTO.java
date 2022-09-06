package com.example.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PublicationSuggestionDTO {
    private String name;

    private String authorsNames;

    private String url;

    private String description;
}
