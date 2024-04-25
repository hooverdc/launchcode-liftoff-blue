import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import WatchedList from "./components/WatchedList";
import LikedList from "./components/LikedList";
import UserProfile from "./components/UserProfile";
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginPage from "./components/LoginPage.jsx";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState("");
  const [page, setPage] = useState("home");

  return (
		<>
			<Navbar page={page} setPage={setPage} movies={movies} setMovies={setMovies} />
			<div>
				{(page == "home") && <Home />}
			</div>
			<div>
				{(page == "watched") && <WatchedList />}
			</div>
			<div>
				{(page == "liked") && <LikedList />}
			</div>
			<div>
				{(page == "search") && <MovieList movies={movies} setMovieData={setMovieData} setPage={setPage}/>}
			</div>
			<div>
				{(page == "movie") && <Movie movieData={movieData} />}
			</div>
			<div>
				{(page == "profile") && <UserProfile />}
			</div>
			<div>
				{(page == "registration") && <RegistrationForm setPage={setPage}/>}
			</div>
			<div>
				{(page == "login") && <LoginPage setPage={setPage}/>}
			</div>

		</>
	);
}