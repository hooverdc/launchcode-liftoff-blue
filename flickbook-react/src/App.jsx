import React from 'react';
import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import { Typography } from '@material-ui/core';

function App() => {

  return (
    <>
			<div>
					<Typography variant="h1">Flickbook</Typography>
					<Navbar />
					<Login />

			</div>
    </>
  )
}

export default App
