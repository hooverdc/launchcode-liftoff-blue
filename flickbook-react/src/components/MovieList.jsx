import React , { useState } from 'react'
import axios from 'axios';

export default function MovieList (props) {
	const isLoggedIn = props.isLoggedIn;
	const [movie, setMovie] = useState({});
	const likeMovie = async (movie) => {
		let username = JSON.parse(localStorage.getItem('sessionId')).username;
		console.log(username);

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
		console.log(username);

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
	
	return (
		<>
			<div className='container-fluid movie-app'>
				<div className="row">
					{props.movies.map((movie, index) => (
						<div className="img-box">
							{movie.Poster !== "N/A" ?
								<img src={movie.Poster} alt={movie.Title}></img> :
								<div className="noimg">
									<p>NO IMAGE AVAILABLE</p>
								</div>}
							<p>{movie.Title} ({movie.Year}{movie.Type !== "movie" ? ` ${movie.Type})` : `)`}</p>
							<button onClick={() => likeMovie(movie)}>Like</button>
							<button onClick={() => toWatchMovie(movie)}>Watch later</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}