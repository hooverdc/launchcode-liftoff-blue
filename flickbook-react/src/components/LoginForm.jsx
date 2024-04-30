import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm(props) {
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
                localStorage.setItem('sessionId', response.config.data);
                console.log(localStorage.getItem('sessionId'));
                // Redirect to login page or directly log the user in
//                 alert("Login successful");
                setPage("home");
            } else {
                alert('Login failed');
            }
        }
        catch (error) {

                alert('User doesn\'t exist or password is incorrect');

        }};

    return (
    <>
        <form onSubmit={handleSubmit}>
        	<ul>
            <li><label>
                Username: 
                <input type="text" value={username} 
                onChange={e => setUsername(e.target.value)} />
            </label></li>
            <li><label>
                Password: 
                <input type="password" value={password} 
                onChange={e => setPassword(e.target.value)} />
            </label></li>
            <li><input type="submit" value="Submit" /></li>
					</ul>
        </form>
        <br/>
        <p>Don't already have an account? <a href="#" onClick={() => setPage("registration")}>Register here</a></p>
        </>
    );
}