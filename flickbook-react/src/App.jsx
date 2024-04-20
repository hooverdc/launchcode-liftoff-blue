import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const fetchLikedMovies = async () => {
      try {
        const response = await axios.get('/api/liked-movies'); // Replace with your actual endpoint
        setLikedMovies(response.data);
      } catch (error) {
        console.error('Failed to fetch liked movies:', error);
      }
    };

    fetchLikedMovies();
  }, []);

  return (
    <div>
      {/* Render your liked movies here */}
      {likedMovies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          {/* Render other movie details here */}
        </div>
      ))}
    </div>
  );
};

export default App;