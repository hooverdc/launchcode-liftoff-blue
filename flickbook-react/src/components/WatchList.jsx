import React, {useEffect, useState} from 'react';

function Home(props) {

return (
	<h2>{username}'s watch list</h2>
	{toWatchMovies.map((movie, index) => (
	<div className="img-box">
		{movie.poster !== "N/A" ?
		<img src={movie.poster} alt={movie.title}></img> :
		<div className="noimg">
		<p>NO IMAGE AVAILABLE</p>
	</div>}
	<p>{movie.title} ({movie.year}</p>
	<button onClick={() => deleteToWatchMovie(movie)}>Remove from watchlist</button>
</div>
))}
);
}