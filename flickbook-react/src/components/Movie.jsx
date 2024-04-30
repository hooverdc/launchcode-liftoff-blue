import React, { useState, useEffect } from 'react';

export default function Movie (props) {
	const movie = props.movieData;
	const genres = { 
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV-Film",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };
	let poster_base = "https://image.tmdb.org/t/p/w500/"; //TMDB base img url
	
	function convertGenreIds (arr) {
		let genreNames = ""
		arr.forEach((num) => {
			genreNames += genres[num];
			if (arr.indexOf(num) !== arr.length-1) { genreNames += ", "}
		});
		return genreNames;
	}
	
	return (
		<>
			<div className="movie-page">
				{movie.poster_path !== null ? 
					<img src={poster_base+movie.backdrop_path} alt={movie.title}></img> : 
					<div className="noimg"> <p>NO IMAGE AVAILABLE</p> </div>}
				<h1>{movie.title}</h1>
				<p><strong>Release Date:</strong> {movie.release_date} </p>
				<p><strong>Genre:</strong> {convertGenreIds(movie.genre_ids)} </p>
				<p><strong>Summary:</strong> {movie.overview} </p>
			</div>
{/* 			TODO : ADD STREAMING INFO */}
		</>
	);
}