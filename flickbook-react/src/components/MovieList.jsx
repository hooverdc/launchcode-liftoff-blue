import React , { useState } from 'react'
import axios from 'axios';

export default function MovieList (props) {
	const isLoggedIn = props.isLoggedIn;
	const [movie, setMovie] = useState({});
	const likeMovie = async (movie) => {
	let username = JSON.parse(localStorage.getItem('sessionId')).username;
// 	console.log(username);

	const movieToLike = {
		"id": movie.imdbID,
		"title": movie.Title,
		"year": movie.Year,
		"poster": movie.Poster,
		"username": username
	};

	axios.post('http://localhost:8080/api/movies-liked/add', movieToLike)
		.then((response) => {
			console.log(response);
			alert("movie liked");
		})
		.catch((error) => {
			alert("movie already liked");
			console.log('Failed to like movie', error);
		});
	};

	const toWatchMovie = async (movie) => {
		let username = JSON.parse(localStorage.getItem('sessionId')).username;
// 		console.log(username);

	const movieToLike = {
		"id": movie.imdbID,
		"title": movie.Title,
		"year": movie.Year,
		"poster": movie.Poster,
		"username": username
	};

	axios.post('http://localhost:8080/api/movies-to-watch/add', movieToLike)
		.then((response) => {
			console.log(response);
			alert("movie added to watch list");
		})
		.catch((error) => {
			alert("movie already added to watch list");
			console.log('Failed to add movie to watch list', error);
		});
	}
	
	let poster_base = "https://image.tmdb.org/t/p/w200/"; //TMDB base img url
	
	function viewMovieInfo(movieData) {
		props.setPage("movie");
		props.setMovieData(movieData);
	}

	return (
		<>
		<div className='container-fluid movie-app'>
			<div className="row">
				{(props.movies.length==0) ? 
					<p className="notfound">Not Found</p> : 
					props.movies.map((movie, i) => (
					<div key={i} className="img-box">
						{movie.poster_path !== null ? //OMDB returns "N/A" instead of null
							<img src={poster_base+movie.poster_path} alt={movie.title}></img> : 
							<div className="noimg"> <p>NO IMAGE AVAILABLE</p> </div>}
						<p><a href="#" onClick={(event) => viewMovieInfo(movie) }>
						{movie.title} ({movie.release_date.slice(0,4)})</a></p> 
						<button onClick={() => likeMovie(movie)}>Like</button>
						<button onClick={() => addToWatchList(movie)}>To-Watch</button>
					</div>
				))}
			</div>
		</div>
		</>
	);
}