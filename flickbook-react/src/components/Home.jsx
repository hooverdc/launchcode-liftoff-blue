import React, {useEffect, useState} from 'react';
import axios from 'axios';
// const handleSubmit = async (event) => {
//     event.preventDefault();
//
//     try {
//         const response = await axios.post('http://localhost:8080/add', {
//             "title": title,
//             "author": author,
//             "genre": genre,
//             "year": year,
//             "rating": rating
//         }, {
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//                 "Authorization": localStorage.getItem('sessionId')
//             }
//         });
//         if (response.status === 200) {
//             alert("Book added successfully");
//         } else {
//             alert('Book addition failed');
//         }
//     } catch (error) {
//         alert('Book addition failed');
//     }
// };
function Home(props) {
    const page = props.page;
    const setPage = props.setPage;
    const isLoggedIn = props.isLoggedIn;
    const likeMovies = props.likeMovies;
    const setLikeMovies = props.setLikeMovies;
    const toWatchMovies = props.toWatchMovies;
    const setToWatchMovies = props.setToWatchMovies;
    const username = props.username;
    const setUsername = props.setUsername;

    useEffect(() => {
        if(isLoggedIn) {
            axios.get('http://localhost:8080/api/movies-liked/get?username=' + username)
                .then((response) => {
                    setLikeMovies(response.data);
                })
                .catch((error) => {
                    console.log('Failed to get liked movies', error);
                });

            axios.get('http://localhost:8080/api/movies-to-watch/get?username=' + username)
                .then((response) => {
                    setToWatchMovies(response.data);
                })
                .catch((error) => {
                    console.log('Failed to get to watch movies', error);
                });
        }

    }, [page, setPage, isLoggedIn, likeMovies, setLikeMovies, toWatchMovies, setToWatchMovies]);

    const deleteLikeMovie = async (movie) => {
        axios.delete('http://localhost:8080/api/movies-liked/delete?username=' + username + '&movieId=' + movie.id)
            .then((response) => {
                console.log(response);
                alert("movie unliked");
            })
            .catch((error) => {
                alert("movie already unliked");
                console.log('Failed to unlike movie', error);
            });
    }

    const deleteToWatchMovie = async (movie) => {
        axios.delete('http://localhost:8080/api/movies-to-watch/delete?username=' + username + '&movieId=' + movie.id)
            .then((response) => {
                console.log(response);
                alert("movie removed from watch list");
            })
            .catch((error) => {
                alert("movie already removed from watch list");
                console.log('Failed to remove movie from watch list', error);
            });
    }

    if (isLoggedIn === true) {

        return (
            <>
                <h1>You are logged in</h1>
                <h2>{username}'s liked movies</h2>
                {likeMovies.map((movie, index) => (
                    <div className="img-box">
                        {movie.poster !== "N/A" ?
                            <img src={movie.poster} alt={movie.title}></img> :
                            <div className="noimg">
                                <p>NO IMAGE AVAILABLE</p>
                            </div>}
                        <p>{movie.title} ({movie.year}</p>
                        <button onClick={() => deleteLikeMovie(movie)}>Unlike</button>

                    </div>
                ))}
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
            </>
        )
    } else {
        return (
            <div>
                <h1>Needs to be logged in to view </h1>
            </div>
        )
    }
}

export default Home;