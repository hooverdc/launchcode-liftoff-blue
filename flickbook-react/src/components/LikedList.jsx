import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function LikedList(props) {
	const page = props.page;
	const setPage = props.setPage;
	const isLoggedIn = props.isLoggedIn;
	const likeMovies = props.likeMovies;
	const setLikeMovies = props.setLikeMovies;
	const toWatchMovies = props.toWatchMovies;
	const setToWatchMovies = props.setToWatchMovies;
	const username = props.username;
	const setUsername = props.setUsername;
	const [change, setChange] = useState(false);

	useEffect(() => {
		if (isLoggedIn) {
			axios.get('http://localhost:8080/api/movies-liked/get?username=' + username)
				.then((response) => { setLikeMovies(response.data); })
				.catch((error) => { console.log('Failed to get liked movies', error); });

		}
	}, []
	);
	
	const deleteLikeMovie = async (movie) => {
		axios.delete('http://localhost:8080/api/movies-liked/delete?username=' + username + '&movieId=' + movie.id)
			.then((response) => {
				console.log(response);
// 				alert("movie unliked");
				setChange(!change);
			})
			.catch((error) => {
// 				alert("movie already unliked");
				console.log('Failed to unlike movie', error);
			});
	}
	
// NEEDS JSON FROM "https://api.themoviedb.org/3/find/"+movieId (IMDB movie ID)
// EXAMPLE:  DUNE (1984) "https://api.themoviedb.org/3/find/tt0087182/"
// USE "https://api.themoviedb.org/3/movie/" + TMDB_id + "?&api_key=" + apikey 
// TO GET imdb_id
	let poster_base = "https://image.tmdb.org/t/p/w200/"; //TMDB base img url
	
	function viewMovieInfo(movieData) {
		props.setPage("movie");
		props.setMovieData(movieData);
	}


	if (isLoggedIn) {
		return (
			<>
				<h2>{username}'s liked movies</h2>
				<div className='container-fluid movie-app'>
					<div className="row">
						{likeMovies.map((movie, index) => (
						<div className="img-box">
						{movie.poster !== "N/A" ?
						<img src={movie.poster} alt={movie.title}></img> :
						<div className="noimg">
							<p>NO IMAGE AVAILABLE</p>
						</div>}
						<p><a href="#" onClick={(event) => viewMovieInfo(movie) }>
							{movie.title} ({movie.year})</a></p>
						<button onClick={() => deleteLikeMovie(movie)}>Unlike</button>
						</div>
						))}
					</div>
				</div>
			</>
		);
	} else {
		return (
			<div>
				<h1>You must logged in to view your Liked Movies</h1>
			</div>
		);
	}
}