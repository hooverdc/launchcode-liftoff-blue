import React from 'react';
import { useState, useEffect } from 'react';

export default function Search() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	
	const getSearchResults = async (searchTerm) => { 
		const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();
	
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
	
	useEffect(() => { getSearchResults(searchTerm); }, [searchTerm]);
	
// 	const handleClick = (event) => { setSearchTerm(event.target.value); }
	
	return (
		<>
		<form>
			<label> SEARCH </label>
			<input type="text"
			value={searchTerm}
			onChange={(event) => setSearchTerm(event.target.value)}
			searchTerm={searchTerm} setSearchTerm={setSearchTerm}
			placeholder='Type to search...' />
			<button> Q </button>
{/* 			<input onClick={handleClick} type="submit" value="Q"/> */}
		</form>
		</>
	);
}