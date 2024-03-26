// UserProfile.js needs fetching of user data from backend API and logic for adding movies, writing reviews and liking movies (CRUD)

import React, { useState, useEffect } from 'react';
import { getUserProfileData, addMovieToWatchedList } from './api';
// Implement this function to fetch user profile data

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {

    // Fetch user profile data when component mounts

    const fetchData = async () => {
        try {
      const userData = await getUserProfileData();
       // Implement this function
      setUserProfile(userData);
      } catch (error) {
      // Error handling needs implementation
      }
    };
    fetchData();
  }, []);

  const handleAddMovie = async () => {
      // Logic for adding a movie to the user's watched list
      try {
        // Implement logic for fetching movie data and adding it to the user's watched list
        const movieData = {}; // Implement this
        await addMovieToWatchedList(movieData);
        // After adding the movie, fetch updated user profile data
        const updatedUserData = await getUserProfileData();
        setUserProfile(updatedUserData);
      } catch (error) {
        console.error('Error adding movie:', error);
      }
    };

  return (
    <div>
      {userProfile && (
        <div>
          <img src={userProfile.profilePicture} alt="Profile" />
          <h1>User Profile</h1>
          <h2>Reviews</h2>
          <ul>
            {userProfile.reviews.map(review => (
              <li key={review.id}>
                <h3>{review.movieTitle}</h3>
                <p>{review.reviewText}</p>
                <button>{review.likes} Likes</button>
              </li>
            ))}
          </ul>
          <button onCLick={handleAddMovie}>Add Movie</button>
          {/* Add buttons or forms for writing reviews and liking movies */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
