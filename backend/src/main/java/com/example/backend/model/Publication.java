package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String publicationUrl;

    private BigInteger numberOfEntitiesFromPublication;

    private String publicationFromCategory;

    @Column(length = 2048)
    private String publicationLabel;

    public Publication(String publicationUrl, BigInteger numberOfEntitiesFromPublication, String publicationFromCategory, String publicationLabel) {
        this.publicationUrl = publicationUrl;
        this.numberOfEntitiesFromPublication = numberOfEntitiesFromPublication;
        this.publicationFromCategory = publicationFromCategory;
        this.publicationLabel = publicationLabel;
    }
}
