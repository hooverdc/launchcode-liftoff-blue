import React from 'react';

export default function MovieList (props) {
let poster_base = "https://image.tmdb.org/t/p/w200/"; //TMDB base img url
	return (
		<>
			{ 
			(props.movies.length==0) ? 
				<p className="notfound">Not Found</p> : 
				props.movies.map((movie, index) => (
				<div className="img-box">
					{movie.poster_path !== null ? //OMDB returns "N/A" instead of null
						<img src={poster_base+movie.poster_path} alt={movie.title}></img> : 
						<div className="noimg">
							<p>NO IMAGE AVAILABLE</p>
						</div>}
					<p>{movie.title} ({movie.release_date.slice(0,4)})</p> 
{/* 				({movie.Year}{movie.Type !== "movie" ? ` ${movie.Type})` : `)`}   //OMDB date info */} 
				</div>
			))}
		</>
	);
}