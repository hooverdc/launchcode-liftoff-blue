import React, { useState, useEffect } from 'react';

export default function Movie (props) {
	const movie = props.movieData;
	const poster_base = "https://image.tmdb.org/t/p/w500/"; //TMDB base img url
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
	
	function convertGenreIds (arr) {
		let genreNames = ""
		arr.forEach((num) => {
			genreNames += genres[num];
			if (arr.indexOf(num) !== arr.length-1) { genreNames += ", "}
		});
		return genreNames;
	}
  
  const [sources, setSources] = useState([]);
	const [prevSource, setPrevSource] = useState("");
  	
	const getStreamingInfo = async (movieId) => { 
		const watchmodeKey = 'NlPwlsF74SSwlMGuaMkimjHrYxIPK6mqKVLocpPE';
		const url = 'https://api.watchmode.com/v1/title/movie-' + movieId
			+ '/sources/?regions=US&apiKey=' + watchmodeKey;	
// 		try { } catch (error) { console.log("fetch response failed", error); }
		const response = await fetch(url);
		const responseJson = await response.json();
	
		if (responseJson) { 
			setSources(responseJson);
		} else setSources({});
	}
	
	useEffect(() => { getStreamingInfo(movie.id); }, [movie.id]);
	
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
			<br />
{/* STREAMING INFO */}
			<h3>Where to Watch</h3>
			<div>
				{sources !== null && sources.map((source, i) => (
// 					setPrevSource(source.name);
					<div key={i}> 
{/* 					{source.name !== prevSource ?  */}
							<strong>{source.name}</strong>	{source.type} {source.format} {source.price}
					</div>
				))}
				<br />
				<p>Streaming data powered by &nbsp;
				<a href="https://www.watchmode.com/">Watchmode.com</a></p>
			</div>
		</>
	);
}