import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div>
					<span>{movie.Title}</span>
				</div>
			))}
		</>
	);
};

export default MovieList;
