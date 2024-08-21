import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
