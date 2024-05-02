import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Browse(props) {
	const [movie, setMovie] = useState({});
	const [category, setCategory] = useState('');
	const poster_base = "https://image.tmdb.org/t/p/w200/"; //TMDB base img url
	
	const getBrowseResults = async () => { 
		const url = "https://api.themoviedb.org/3/discover/movie?" +
		"include_adult=false&include_video=false&language=en-US&page=1" + 
		"&sort_by=popularity.desc&api_key=c9f28a74e58f0319e5b5844496ca4d3a";
		const response = await fetch(url);
		const responseJson = await response.json();
	
		if (responseJson.results) { //OMDB uses .Search instead of .results
			props.setMovies(responseJson.results);
		}
	}
		
		useEffect(() => { getBrowseResults(); }, []);

	function viewMovieInfo(movieData) {
		props.setPage("movie");
		props.setMovieData(movieData);
	}
	return (
		<>
			<h1>Browse</h1>
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
							<button onClick={() => toWatchMovie(movie)}>Watch later</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}