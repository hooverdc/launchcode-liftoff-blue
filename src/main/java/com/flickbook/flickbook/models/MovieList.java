package com.flickbook.flickbook.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
public class MovieList {
    @Id
    @GeneratedValue()
    private int id;

    @NotNull(message = "List name is required")
    @Size(max = 100, message = "List name can only be 100 characters maximum")
    @Column(name = "list_name")
    private String listName;

    private List<Movie> movies = new ArrayList<>();
}
