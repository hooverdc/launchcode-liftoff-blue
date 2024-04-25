package com.flickbook.flickbook.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    private String id;

    private String title;
    private Long year;

    private String poster;

    public Movie(String id, String title, Long year, String poster) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.poster = poster;
    }

    @ManyToMany(mappedBy = "moviesToWatched")
    @JsonBackReference
    private List<User> usersToWatched = new ArrayList<>();

    @ManyToMany(mappedBy = "moviesLiked")
    @JsonBackReference
    private List<User> usersLiked = new ArrayList<>();

//    private boolean series;
//
//    private String description;

}
