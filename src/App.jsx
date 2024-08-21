import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'
import Aboute from './Pages/Aboute/Aboute'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <Aboute/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
