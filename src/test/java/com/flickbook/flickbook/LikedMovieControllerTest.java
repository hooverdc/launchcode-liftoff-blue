package com.flickbook.flickbook;

import com.flickbook.flickbook.models.LikedMovie;
import com.flickbook.flickbook.service.LikedMovieService;
import com.flickbook.flickbook.controllers.LikedMovieController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class LikedMovieControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LikedMovieService likedMovieService;

    @Test
    public void testSaveLikedMovie() throws Exception {
        // Arrange
        LikedMovie movie = new LikedMovie();
        movie.setTitle("Test Movie");
        when(likedMovieService.saveLikedMovie(movie)).thenReturn(movie);

        // Act & Assert
        mockMvc.perform(post("/api/liked-movies")
                        .contentType("application/json")
                        .content("{\"title\":\"Test Movie\"}"))
                .andExpect(status().isOk());
    }
}