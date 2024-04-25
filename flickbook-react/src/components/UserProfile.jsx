import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace '/api/user' with your actual API endpoint
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddMovie = async () => {
    try {
      // TODO Replace '/api/user/movies' with the actual API endpoint
      await axios.post('/api/user/movies', { movieId: '123' }); // Example movieId
      // After adding the movie, fetch updated user profile data
      const response = await axios.get('/api/user');
      setUserProfile(response.data);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const handleWriteReview = async (movieId, reviewText) => {
    try {
      // Replace '/api/user/movies/:movieId/reviews' with your actual API endpoint
      await axios.post(`/api/user/movies/${movieId}/reviews`, { reviewText });
      // After writing the review, fetch updated user profile data
      const response = await axios.get('/api/user');
      setUserProfile(response.data);
    } catch (error) {
      console.error('Error writing review:', error);
    }
  };

  const handleLikeMovie = async (movieId) => {
    try {
      // Replace '/api/user/movies/:movieId/like' with your actual API endpoint
      await axios.post(`/api/user/movies/${movieId}/like`);
      // After liking the movie, fetch updated user profile data
      const response = await axios.get('/api/user');
      setUserProfile(response.data);
    } catch (error) {
      console.error('Error liking movie:', error);
    }
  };

  return (
    <div>
      {userProfile && (
        <div>
          <h1>User Profile</h1>
          <img src={userProfile.profilePicture} alt="profile picture" />
          
          <p> Display user's movie reviews and liked movies </p>
          {/* Button to add a movie */}
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      )}
    </div>
  );
}