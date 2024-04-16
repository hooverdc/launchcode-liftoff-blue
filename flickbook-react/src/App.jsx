import React, { useState, useEffect } from 'react';
import { CssBaseline, Typography, AppBar, Toolbar, Container, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { Home } from '@mui/icons-material';
// import useStyles from "./styles";
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './styles';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6)
//     }
// }));

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      // Fetch data from API endpoint
      const response = await fetch('http://www.omdbapi.com/?s=Batman&Country=United+States&apikey=263d22d8');
      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h2" align="center" color="textPrimary" gutterbottom>
            Home
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            All the movies we think you might like!
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Movies to watch
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Add Movie to Favorites
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {movies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={movie.imageUrl}
                    title={movie.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {movie.title}
                    </Typography>
                    <Typography>
                      {movie.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">Add</Button>
                    <Button size="small" color="primary">Review</Button>
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
