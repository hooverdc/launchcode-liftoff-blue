import React from 'react';
import Search from "./Search";

export default function Navbar(props) {
	const setPage = props.setPage;
	const isSearch = props.page==="search";
	const isLoggedIn = props.isLoggedIn;

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
					{!isLoggedIn && <li> <a href="#" onClick={(event) => setPage("registration")}> REGISTER</a>| </li>}

					{!isLoggedIn && <li> <a href="#" onClick={(event) => setPage("login")}> LOGIN </a> </li>}
				</ul>
			</nav>
		</div>
	);
}