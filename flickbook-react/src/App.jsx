import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";


function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState("home");
  
  return (
    <>
			<div>
				<Navbar page={page} setPage={setPage} movies={movies} setMovies={setMovies} />
				<div className='container-fluid movie-app'>
					{(page == "home") && <p>home</p>}
				</div>
				<div className='container-fluid movie-app'>
					<div className="row">
						{(page == "search") && <MovieList movies={movies} />}
					</div>
				</div>
			</div>
    </>
  )
}

export default App
