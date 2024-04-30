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

// 	useEffect(() => {
// 		if(isLoggedIn) {
// 			axios.get('http://localhost:8080/api/movies-liked/get?username=' + username)
// 				.then((response) => {
// 						setLikeMovies(response.data);
// 				})
// 				.catch((error) => {
// 						console.log('Failed to get liked movies', error);
// 				});
// 
// 			axios.get('http://localhost:8080/api/movies-to-watch/get?username=' + username)
// 				.then((response) => {
// 						setToWatchMovies(response.data);
// 				})
// 				.catch((error) => {
// 						console.log('Failed to get to watch movies', error);
// 				});
// 			}
// 		}, [page, setPage, isLoggedIn, likeMovies, setLikeMovies, toWatchMovies, setToWatchMovies]
// 	);
	
// TODO : ADD BROWSING
	return (
		<>
		<h1>Home</h1>
		<p>This is the Home page</p>
		</>
	);
}