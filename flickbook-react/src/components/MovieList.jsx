import React from 'react';
import axios from 'axios';
import reactLogo from '.././assets/react.svg'

export default function MovieList (props) {
    const likeMovie = async (movie) => {
    try {
    await axios.post('http://localhost:3001/moviesLiked', movie);
    } catch (error) {
    console.error('Failed to like movie', error);
        }
    };
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="img-box">
					{movie.Poster !== "N/A" ?
						<img src={movie.Poster} alt={movie.Title}></img> :
						<div className="noimg">
							<p>NO IMAGE AVAILABLE</p>
						</div>}
					<p>{movie.Title} ({movie.Year}{movie.Type !== "movie" ? ` ${movie.Type})` : `)`}</p>
					<button onClick={() => likeMovie(movie)}>Like</button>
				</div>
			))}
		</>
	);
}