import React from 'react';
import Home from "./Home";
import Search from "./Search";
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
	const setPage = props.setPage;
	const isSearch = props.page=="search";

	return (
		<div className="nav">
			<nav>
				<ul>
{/* 					<li><Link to="/home">Home</Link></li> */}
{/* 					<li><Link to="/search">Search</Link></li> */}
{/* 					<li><Link to="/profile">Profile</Link></li> */}
					<li> <a href="#" onClick={(event) => setPage("home")}> HOME </a> </li> |  
					<li> <a href="#" onClick={(event) => setPage("history")}> WATCH HISTORY </a> </li> |
					<li> <a href="#" onClick={(event) => setPage("watchlist")}> WATCH LIST </a> </li> | 
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