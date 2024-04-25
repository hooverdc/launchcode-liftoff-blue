import React from 'react';
import Search from "./Search";

export default function Navbar(props) {
	const setPage = props.setPage;

	return (
		<div className="nav">
			<nav>
				<ul>
					<li> <a href="#" onClick={(event) => setPage("home")}> HOME </a> </li> |  
					<li> <a href="#" onClick={(event) => setPage("watched")}> WATCHED </a> </li> |
					<li> <a href="#" onClick={(event) => setPage("liked")}> LIKED </a> </li> | 
					<li> 
						{props.page=="search" ? 
							<Search setMovies={props.setMovies} /> :
							<a href="#" onClick={(event) => setPage("search")}> SEARCH </a>}
					</li> |
					<li> <a href="#" onClick={(event) => setPage("login")}> LOGIN </a> </li> | 
					<li> <a href="#" onClick={(event) => setPage("register")}> REGISTER</a> </li>
				</ul>
			</nav>
		</div>
	);
}