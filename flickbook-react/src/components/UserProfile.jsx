// UserProfile.js needs fetching of user data from backend API and logic for adding movies, writing reviews and liking movies (CRUD)

import React, { useState, useEffect } from 'react';
import { getUserProfileData } from './api'; 
// Implement this function to fetch user profile data

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {

    // Fetch user profile data when component mounts

    const fetchData = async () => {
      const userData = await getUserProfileData();
       // Implement this function
      setUserProfile(userData);
    };
    fetchData();
  }, []);

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
          <button>Add Movie</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
