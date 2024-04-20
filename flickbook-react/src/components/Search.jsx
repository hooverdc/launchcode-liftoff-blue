import React from 'react';
import { useState, useEffect } from 'react';

export default function Search(props) {
	const [searchTerm, setSearchTerm] = useState('');
	
	const getSearchResults = async (searchTerm) => { 
// 		const url = 'https://www.omdbapi.com/?s='+searchTerm+'&apikey=263d22d8';
		const url = 'https://api.themoviedb.org/3/search/movie?query='
			+searchTerm+'&api_key=c9f28a74e58f0319e5b5844496ca4d3a';
		const response = await fetch(url);
		const responseJson = await response.json();
	
		if (responseJson.results) { //OMDB uses .Search instead of results
			props.setMovies(responseJson.results);
		}
	}
	
	useEffect(() => { getSearchResults(searchTerm); }, [searchTerm]);
	
	return (
		<>
			<input placeholder='Type to search...' value={searchTerm} 
			onChange={(event) => setSearchTerm(event.target.value)} />
		</>
	);
}

// 		const baseUrl = 'https://api.themoviedb.org/3/';
// 		const searchParam = `search/movie?query=${searchTerm}`;
// 		const optionalParams = '&language=en-US&page=1';
// 		const apikey = '&api_key=c9f28a74e58f0319e5b5844496ca4d3a';
// 		const searchUrl = baseUrl+searchParam+optionalParams+apikey;