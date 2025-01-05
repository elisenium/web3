import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from '../Navbar/Navbar'

const App = () => {
  
  return (
    <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
