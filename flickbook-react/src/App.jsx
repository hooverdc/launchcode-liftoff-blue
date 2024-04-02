import React from 'react';
import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { ThumbUp, ThumbDown, LibraryAdd, Home, AddComment } from '@mui/icons-material';
function App() {

  return (
    <>
	<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Home />
					<Typography variant="h6">
						Home
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterbottom>
							Home 
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							All the movies we think you might like!
						</Typography>
						<div>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained">
										Movies to watch
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
    </>
  )
}

export default App
