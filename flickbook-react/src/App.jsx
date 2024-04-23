import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import LikedList from "./components/LikedList";
import UserProfile from "./components/UserProfile";

export default function App() {
  const [movies, setMovies] = useState([]);
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
			<div className='container-fluid movie-app'>
				<div className="row">
					{(page == "search") && <MovieList movies={movies} />}
				</div>
			<div>
				{(page == "profile") && <UserProfile />}
			</div>
			</div>
		</>
	);
}