import React, {useEffect} from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Home from "./components/Home.jsx";


function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState("registration");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('sessionId') !== null) {
			setIsLoggedIn(true);
		}
	}, [isLoggedIn, page]);
  
  return (
    <>
			<div>
				<Navbar page={page} setPage={setPage} movies={movies} setMovies={setMovies} isLoggedIn={isLoggedIn} />
				<div className='container-fluid movie-app'>
					{(page == "registration") && <RegistrationForm setPage={setPage}/>}
				</div>
				<div className='container-fluid movie-app'>
					{(page == "login") && <LoginPage setPage={setPage}/>}
				</div>
				<div className='container-fluid movie-app'>
					{(page == "home") && <Home setPage={setPage} isLoggedIn = {isLoggedIn} />}
				</div>
				<div className='container-fluid movie-app'>
					<div className="row">
						{(page == "search") && <MovieList movies={movies} isLoggedIn={isLoggedIn} />}
					</div>
				</div>
			</div>
    </>
  )
}

export default App
