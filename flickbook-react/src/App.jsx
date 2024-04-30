import React, {useEffect} from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import LikedList from "./components/LikedList.jsx";
import WatchList from "./components/WatchList.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState("");
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likeMovies, setLikeMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [username, setUsername] = useState('');

	useEffect(() => {
		let sessionId = localStorage.getItem('sessionId'); 
		if (sessionId !== null && sessionId !== undefined && Object.keys(sessionId).length) {
			setIsLoggedIn(true);
			let username_str = JSON.parse(localStorage.getItem('sessionId')).username;
			setUsername(username_str);
		}
	}, [isLoggedIn, page]);
  
  return (
    <>	
			<Navbar page={page} setPage={setPage} movies={movies} setMovies={setMovies} isLoggedIn={isLoggedIn} setLoggedIn = {setIsLoggedIn} />
			{(page == "home") && <Home page={page} setPage={setPage} isLoggedIn={isLoggedIn} likeMovies={likeMovies} setLikeMovies={setLikeMovies} toWatchMovies={toWatchMovies} setToWatchMovies={setToWatchMovies} username={username} setUsername={setUsername}/>}
			{(page == "likedlist") && <LikedList page={page} setPage={setPage} isLoggedIn={isLoggedIn} likeMovies={likeMovies} setLikeMovies={setLikeMovies} toWatchMovies={toWatchMovies} setToWatchMovies={setToWatchMovies} username={username} setUsername={setUsername}/>}
			{(page == "watchlist") && <WatchList page={page} setPage={setPage} isLoggedIn={isLoggedIn} likeMovies={likeMovies} setLikeMovies={setLikeMovies} toWatchMovies={toWatchMovies} setToWatchMovies={setToWatchMovies} username={username} setUsername={setUsername}/>}
			{(page == "search") && <MovieList setPage={setPage} isLoggedIn={isLoggedIn} movies={movies} setMovieData={setMovieData} />}
			{(page == "movie") && <Movie movieData={movieData} setPage={setPage} />}
			{(page == "profile") && <UserProfile />}
			{(page == "registration") && <RegistrationForm setPage={setPage}/>}				
			{(page == "login") && <LoginForm setPage={setPage}/>}			
    </>
  )
}
