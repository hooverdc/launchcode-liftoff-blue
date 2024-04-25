package com.flickbook.flickbook.service;

import com.flickbook.flickbook.data.LikedMovieRepository;
import com.flickbook.flickbook.models.LikedMovie;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LikedMovieService {

    private final LikedMovieRepository likedMovieRepository;

    public LikedMovieService(LikedMovieRepository likedMovieRepository) {
        this.likedMovieRepository = likedMovieRepository;
    }

    @Transactional
    public LikedMovie saveLikedMovie(LikedMovie likedMovie) {
        return likedMovieRepository.save(likedMovie);
    }

    // other methods as needed
}