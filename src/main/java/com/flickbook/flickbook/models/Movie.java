package com.flickbook.flickbook.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Movie {
    @Id
    @GeneratedValue()
    private int id;

    @NotNull(message = "Name is required")
    @Size(max = 100, message = "Movie name can only be 100 characters maximum")
    @Column(name = "title")
    private String title;

    private String year;

    private boolean series;

    private String description;

}
