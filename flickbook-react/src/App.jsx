import React, { useState } from 'react';
import { CssBaseline, Typography, AppBar, Toolbar, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { Home } from '@mui/icons-material';
import Search from './components/Search';
import useStyles from "./styles";
import { styled } from '@mui/material/styles';

const apiKey = '79ae106748bb469cd14de47c706af1c1'; // TMDB API key
const apiUrl = 'https://api.themoviedb.org/3'; // TMDB API base URL

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  // Function to add a movie to the list of liked movies
 const addMovieToList = async (movie) => {
   try {
     const response = await fetch('/api/add-movie', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(movie),
     });

     if (!response.ok) {
       throw new Error('Failed to add movie');
     }

     // Handle successful response (optional)
     console.log('Movie added successfully!');
   } catch (error) {
     console.error('Error adding movie:', error);
   }
 };


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Home className={classes.icon} />
          <Typography variant="h6">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Search component */}
        <Search setMovies={setMovies} apiKey={apiKey} apiUrl={apiUrl} />

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {movies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {movie.title}
                    </Typography>
                    <Typography>
                      {movie.overview}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => addMovieToList(movie)}>Like</Button>
                    {/* Add more actions/buttons as needed */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterbottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary">
          Something to give the footer a purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;
