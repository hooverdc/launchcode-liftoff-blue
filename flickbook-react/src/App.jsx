import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Login from "./components/Login"

function App() {

  return (
    <>
			<div>
					<Navbar />
					<Login />

			</div>
    </>
  )
}

export default App
