import React from 'react';
import Search from "./Search";

export default function Navbar(props) {
	const setPage = props.setPage;
	const isSearch = props.page=="search";

	return (
		<div className="nav">
			<nav>
				<ul>
					<li> <a href="#" onClick={(event) => setPage("home")}> HOME </a> </li> |  
					<li> <a href="#" onClick={(event) => setPage("watched")}> WATCHED LIST </a> </li> |
					<li> <a href="#" onClick={(event) => setPage("liked")}> LIKED LIST </a> </li> | 
					<li> 
						{props.page=="search" ? 
							<Search movies={props.movies} setMovies={props.setMovies} /> :
							<a href="#" onClick={(event) => setPage("search")}> SEARCH </a>}
					</li> |
					<li> <a href="#" onClick={(event) => setPage("profile")}> LOGIN/PROFILE </a> </li>
				</ul>
			</nav>
		</div>
	);
}