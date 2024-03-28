import React from 'react';
import reactLogo from '.././assets/react.svg'
export default function MovieList (props) {
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
				</div>
			))}
		</>
	);
}