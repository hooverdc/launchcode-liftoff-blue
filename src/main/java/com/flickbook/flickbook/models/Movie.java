package com.flickbook.flickbook.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Title is required")
    private String title;

    @NotNull(message = "Year is required")
    private Long year;

    @ManyToMany(mappedBy = "moviesWatched")
    private List<User> usersWatched = new ArrayList<>();

    @ManyToMany(mappedBy = "moviesRecommend")
    private List<User> usersRecommend = new ArrayList<>();

//    private boolean series;
//
//    private String description;

}
