import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"

import ResponsiveAppBar from "./components/AppBar.jsx";

function App() {

  return (
    <>
			<div>
					{/*<Navbar />*/}
					{/*<Login />*/}
					<ResponsiveAppBar/>
			</div>
    </>
  )
}

export default App
