import React from 'react';
import { useState, useEffect } from 'react';

export default function Search(props) {
	const [searchTerm, setSearchTerm] = useState('');
	
	const getSearchResults = async (searchTerm) => {
// 	TODO : UPDATE WITH TMDB API
		const url = `http://www.omdbapi.com/?s=${searchTerm}&Country=United+States&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();
	
		if (responseJson.Search) {
			props.setMovies(responseJson.Search);
		}
	}
	
	useEffect(() => { getSearchResults(searchTerm); }, [searchTerm]);
	
	return (
		<>
			<input value={searchTerm}
			onChange={(event) => setSearchTerm(event.target.value)}
			placeholder='Type to search...' />
		</>
	);
}