package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.models.Movie;
import com.flickbook.flickbook.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public String addMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
        return "Movie is added";
    }

    @GetMapping("/getAll")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }
}
