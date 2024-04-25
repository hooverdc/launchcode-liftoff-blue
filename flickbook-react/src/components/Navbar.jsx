import React from 'react';
import Home from "./Home";
import Search from "./Search";

export default function Navbar(props) {
	const setPage = props.setPage;

	return (
		<div className="nav">
			<nav>
				<ul>
					<li> <a href="#" onClick={(event) => setPage("home")}> HOME </a> </li> |  
					<li> <a href="#" onClick={(event) => setPage("watched")}> WATCHED LIST </a> </li> |
					<li> <a href="#" onClick={(event) => setPage("liked")}> LIKED LIST </a> </li> | 
					<li> 
						{props.page=="search" ? 
							<Search setMovies={props.setMovies} /> :
							<a href="#" onClick={(event) => setPage("search")}> SEARCH </a>}
					</li> |
					<li> <a href="#" onClick={(event) => setPage("registration")}> REGISTER</a> </li> |
					<li> <a href="#" onClick={(event) => setPage("login")}> LOGIN </a> </li>
				</ul>
			</nav>
		</div>
	);
}

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
					<li> <a href="#" onClick={(event) => setPage("history")}> WATCH HISTORY </a> </li> |
					<li> <a href="#" onClick={(event) => setPage("watchlist")}> WATCH LIST </a> </li> | 
					<li> 
						{props.page=="search" ? 
							<Search movies={props.movies} setMovies={props.setMovies} /> :
							<a href="#" onClick={(event) => setPage("search")}> SEARCH </a>}
					</li> |
					<li> <a href="#" onClick={(event) => setPage("registration")}> REGISTER</a> </li>|
					<li> <a href="#" onClick={(event) => setPage("login")}> LOGIN </a> </li>
				</ul>
			</nav>
		</div>
	);
}