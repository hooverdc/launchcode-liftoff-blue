import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
	const [] = useState('');
  
  return (
    <>
			<div>
				<Navbar />
{/* 				<MovieList movies={movies}/> */}
			</div>
    </>
  )
}

export default App
