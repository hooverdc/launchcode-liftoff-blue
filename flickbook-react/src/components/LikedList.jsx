import React, { useState, useEffect } from 'react';

export default function LikedList() {

	// 	useEffect(() => {
  // 		const fetchLikedMovies = async () => {
  // 			try {
  // 				const response = await axios.get('http://localhost:8080/api/moviesLiked'); // Replace with your actual endpoint
  // 				setLikedMovies(response.data);
  // 			} catch (error) {
  // 				console.error('Failed to fetch liked movies:', error);
  // 			}
  // 		};
  // 
  // 		fetchLikedMovies();
  // 	}, []);
      
	return (
		<>
		<p>This is your Liked List page</p>
  {/* 		{likedMovies.map(movie => ( */}
  {/* 		<div key={movie.id}> */}
  {/* 		<h2>{movie.title}</h2> */}
  {/* 		</div> */}
  {/* 		))} */}
		</>
	);
}