import React from 'react';
import { CssBaseline, Typography, AppBar, Toolbar, Container, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { Home } from '@mui/icons-material';
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  const classes = useStyles();

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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
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
