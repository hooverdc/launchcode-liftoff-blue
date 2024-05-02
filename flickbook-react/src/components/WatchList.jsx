import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function WatchList(props) {
    const page = props.page;
    const setPage = props.setPage;
    const isLoggedIn = props.isLoggedIn;
    const likeMovies = props.likeMovies;
    const setLikeMovies = props.setLikeMovies;
    const toWatchMovies = props.toWatchMovies;
    const setToWatchMovies = props.setToWatchMovies;
    const username = props.username;
    const setUsername = props.setUsername;
    const [change, setChange] = useState(false);

	useEffect(() => {
		if (isLoggedIn) {
			axios.get('http://localhost:8080/api/movies-to-watch/get?username=' + username)
				.then((response) => { setToWatchMovies(response.data); })
				.catch((error) => { console.log('Failed to get to watch movies', error); });
		}
	}, [change]
	);

    const deleteToWatchMovie = async (movie) => {
        axios.delete('http://localhost:8080/api/movies-to-watch/delete?username=' + username + '&movieId=' + movie.id)
            .then((response) => {
                console.log(response);
//                 alert("movie removed from watch list");
                setChange(!change);
            })
            .catch((error) => {
//                 alert("movie already removed from watch list");
                console.log('Failed to remove movie from watch list', error);
            });
    }

    if (isLoggedIn) {
        return (
					<>
						<h2>{username}'s watch list</h2>
						<div className='container-fluid movie-app'>
							<div className="row">		
								{toWatchMovies.map((movie, index) => (
								<div className="img-box">
									{movie.poster !== "N/A" ?
									<img src={movie.poster} alt={movie.title}></img> :
									<div className="noimg">
										<p>NO IMAGE AVAILABLE</p>
									</div>}
									<p>{movie.title} ({movie.year})</p>	
									<button onClick={() => deleteToWatchMovie(movie)}>Remove from watchlist</button>
								</div>
								))}
							</div>
						</div>
					</>
        );
    } else {
        return (
					<>
						<h1>You must logged in to view your Watch List</h1>
					</>
        );
    }
}