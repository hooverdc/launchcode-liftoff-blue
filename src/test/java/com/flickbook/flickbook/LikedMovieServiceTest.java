package com.flickbook.flickbook;

import com.flickbook.flickbook.models.LikedMovie;
import com.flickbook.flickbook.data.LikedMovieRepository;
import com.flickbook.flickbook.service.LikedMovieService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class LikedMovieServiceTest {

    @Test
    public void testSaveLikedMovie() {
        // Arrange
        LikedMovieRepository repository = Mockito.mock(LikedMovieRepository.class);
        LikedMovieService service = new LikedMovieService(repository);
        LikedMovie movie = new LikedMovie();
        movie.setTitle("Test Movie");
        when(repository.save(movie)).thenReturn(movie);

        // Act
        LikedMovie result = service.saveLikedMovie(movie);

        // Assert
        assertEquals(movie, result);
    }
}