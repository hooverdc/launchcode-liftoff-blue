import React from 'react';
import axios from 'axios';

export default function MovieList (props) {
 let poster_base = "https://image.tmdb.org/t/p/w200/"; //TMDB base img url

 const likeMovie = async (movie) => {
  try {
   await axios.post('http://localhost:3001/moviesLiked', movie);
  } catch (error) {
   console.error('Failed to like movie', error);
  }
 };

 const addToWatchList = async (movie) => {
  try {
   await axios.post('http://localhost:3001/toWatchList', movie); // Replace with your actual endpoint
  } catch (error) {
   console.error('Failed to add movie to watch list:', error);
  }
 };

 return (
  <>
   {
   (props.movies.length === 0) ?
    <p className="notfound">Not Found</p> :
    props.movies.map((movie, index) => (
    <div className="img-box">
     {movie.poster_path !== null ? //OMDB returns "N/A" instead of null
      <img src={poster_base+movie.poster_path} alt={movie.title}></img> :
      <div className="noimg">
       <p>NO IMAGE AVAILABLE</p>
      </div>}
      <p>{movie.title} ({movie.release_date.slice(0,4)})</p>
      <button onClick={() => likeMovie(movie)}>Like</button>
      <button onClick={() => addToWatchList(movie)}>To-Watch</button>
    </div>
   ))}
  </>
 );
}