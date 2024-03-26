import React from 'react';
import Search from "./Search";

export default function Navbar() {
	return (
		<div>
			<nav>
				<ul>
					<li> <a href=""> HOME </a> </li> |  
					<li> <a href=""> WATCH HISTORY </a> </li> |
					<li> <a href=""> WATCH LIST </a> </li> | 
					<li> 
					<Search /> 
					</li> |
					<li> <a href=""> LOGIN/PROFILE </a> </li>
				</ul>
			</nav>
		</div>
	);
}