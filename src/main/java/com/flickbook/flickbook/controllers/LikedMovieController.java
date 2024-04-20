package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.models.LikedMovie;
import com.flickbook.flickbook.service.LikedMovieService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/liked-movies")
public class LikedMovieController {

    private final LikedMovieService likedMovieService;

    public LikedMovieController(LikedMovieService likedMovieService) {
        this.likedMovieService = likedMovieService;
    }

    @PostMapping
    public LikedMovie saveLikedMovie(@RequestBody LikedMovie likedMovie) {
        return likedMovieService.saveLikedMovie(likedMovie);
    }

    // other methods as needed
}