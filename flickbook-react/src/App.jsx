import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import LikedList from "./components/LikedList";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState("home");
  const [likedMovies, setLikedMovies] = useState([]);

  return (
		<>
			<Navbar page={page} setPage={setPage} movies={movies} setMovies={setMovies} />
{/* Displays "pages" */}
			<div>
				{(page == "home") && <Home likedMovies={likedMovies}/>}
			</div>
			<div>
				{(page == "watched") && <WatchedList />}
			</div>
			<div>
				{(page == "liked") && <LikedList />}
			</div>
			<div>
				{(page == "profile") && <UserProfile />}
			</div>
			<div className='container-fluid movie-app'>
				<div className="row">
					{(page == "search") && <MovieList movies={movies} />}
				</div>
			</div>
		</>
	);
};

export default App;