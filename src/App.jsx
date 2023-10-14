import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
