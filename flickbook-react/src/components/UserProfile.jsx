import React, { useState, useEffect } from 'react';

export default function UserProfile() {
	const [userProfile, setUserProfile] = useState(null);
	
	return (
		<>
			<h1>User Profile</h1>
			<img src="" alt="[profile picture]" />
			<p> Display user's movie reviews and liked movies </p>
		</>
	);
}