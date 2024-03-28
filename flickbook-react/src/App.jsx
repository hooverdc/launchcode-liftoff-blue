import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"

import ResponsiveAppBar from "./components/AppBar.jsx";
import HarryPotter from "./components/HarryPotter.jsx";

function App() {

  return (
    <>
			<div>
					{/*<Navbar />*/}
					{/*<Login />*/}
					<ResponsiveAppBar/>
                    <HarryPotter/>
			</div>
    </>
  )
}

export default App
