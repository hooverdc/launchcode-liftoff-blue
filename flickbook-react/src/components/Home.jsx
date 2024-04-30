import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Home(props) {
    const page = props.page;
    const setPage = props.setPage;
    const isLoggedIn = props.isLoggedIn;
    const likeMovies = props.likeMovies;
    const setLikeMovies = props.setLikeMovies;
    const toWatchMovies = props.toWatchMovies;
    const setToWatchMovies = props.setToWatchMovies;
    const username = props.username;
    const setUsername = props.setUsername;
	
// TODO : ADD BROWSING
	return (
		<>
		<h1>Home</h1>
		<p>This is the Home page</p>
		</>
	);
}