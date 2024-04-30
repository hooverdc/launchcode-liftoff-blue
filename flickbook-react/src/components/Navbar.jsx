import React from 'react';
import Search from "./Search";

export default function Navbar(props) {
	const setPage = props.setPage;
	const isSearch = props.page==="search";
	const isLoggedIn = props.isLoggedIn;
	const setLoggedIn = props.setLoggedIn;

	const logout = () => {
		setLoggedIn(false);
		localStorage.removeItem('sessionId');
	}

	return (
		<div className="nav">
			<nav>
				<ul>
					<li> <a href="#" onClick={(event) => setPage("home")}> HOME </a> </li> |  
					<li> <a href="#" onClick={(event) => setPage("likedlist")}> LIKED MOVIES </a> </li> |
					<li> <a href="#" onClick={(event) => setPage("watchlist")}> WATCH LIST </a> </li> | 
					<li> {props.page=="search" ? 
						<Search movies={props.movies} setMovies={props.setMovies} /> :
						<a href="#" onClick={(event) => setPage("search")}> SEARCH </a>}
					</li> |
					<li> {isLoggedIn ?
						<a href="#" onClick= {logout}> LOGOUT </a> : 
						<a href="#" onClick={(event) => setPage("login")}> LOGIN </a>}
					</li>
				</ul>
			</nav>
		</div>
	);
}