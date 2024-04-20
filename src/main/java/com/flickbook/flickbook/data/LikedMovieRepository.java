package com.flickbook.flickbook.data;

import com.flickbook.flickbook.models.LikedMovie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikedMovieRepository extends JpaRepository<LikedMovie, Long>{
}
