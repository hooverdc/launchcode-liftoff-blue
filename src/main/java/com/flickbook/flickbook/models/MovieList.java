package com.flickbook.flickbook.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieList {
    @Id
    @GeneratedValue()
    private Long id;

    @NotNull(message = "List name is required")
    @Size(max = 100, message = "List name can only be 100 characters maximum")
    private String listName;

    private List<Movie> movies = new ArrayList<>();
}
