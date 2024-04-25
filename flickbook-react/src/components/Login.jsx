import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
    const setPage = props.setPage;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/login', { "username": username, "password": password },{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }});
            if (response.status === 200) {
                localStorage.setItem('sessionId', response.data);
                // Redirect to login page or directly log the user in
                alert("Login successful");
                setPage("home");
            } else {
                alert('Login failed');
            }
        }
        catch (error) {

                alert('User doesn\'t exist or password is incorrect');

        }};

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}