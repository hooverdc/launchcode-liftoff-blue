import React from 'react';
import reactLogo from '.././assets/react.svg'
export default function MovieList (props) {
	return (
		<>
			{props.movies.map((movie, index) => (
				movie.Poster !== "N/A" ? 
					<img src={movie.Poster} alt={movie.Title}></img> : 
					<div className="noimg">
						<p>{movie.Title}</p>
						<p className="na">NO IMAGE AVAILABLE</p>
					</div>
			))}
		</>
	);
}