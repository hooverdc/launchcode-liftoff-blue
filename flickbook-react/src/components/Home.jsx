import React, { useState } from 'react';
import axios from 'axios';
// const handleSubmit = async (event) => {
//     event.preventDefault();
//
//     try {
//         const response = await axios.post('http://localhost:8080/add', {
//             "title": title,
//             "author": author,
//             "genre": genre,
//             "year": year,
//             "rating": rating
//         }, {
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//                 "Authorization": localStorage.getItem('sessionId')
//             }
//         });
//         if (response.status === 200) {
//             alert("Book added successfully");
//         } else {
//             alert('Book addition failed');
//         }
//     } catch (error) {
//         alert('Book addition failed');
//     }
// };
function Home(props) {
    const setPage = props.setPage;
    const isLoggedIn = props.isLoggedIn;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');


    if (isLoggedIn === true) {
        return (
            <>
                <h1>You are logged in</h1>
            </>
        )
    } else {
        return (
            <div>
                <h1>Needs to be logged in to view </h1>
            </div>
        )
    }
}

export default Home;