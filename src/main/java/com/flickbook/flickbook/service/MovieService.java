package com.flickbook.flickbook.service;

import com.flickbook.flickbook.models.Movie;

import java.util.List;

public interface MovieService {
    public Movie addMovie(Movie movie);
    public List<Movie> getAllMovies();
}
