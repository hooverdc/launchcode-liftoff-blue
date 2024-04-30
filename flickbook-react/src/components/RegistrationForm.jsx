import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm(props) {
    const setPage = props.setPage;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== verifyPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/register', { "username": username, "password": password },{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }});
            if (response.status === 200) {
                // Redirect to login page or directly log the user in
                alert("Registration successful");
                setPage("login");
            } else {
                alert('Registration failed');
            }
        }
        catch (error) {
            if (error.response.status === 409) {
                alert('Username already exists');
            }
            else {
                alert('Registration failed');
        }
    }};


    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
                Verify Password:
                <input type="password" value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <br/>
    <p>Already have an account? <a href="#" onClick={() => setPage("login")}>Login here</a></p>
</>
    );
}