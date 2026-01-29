import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import Analytics from './Components/analytics'
import Newsletter from './Components/Newsletter'

function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </>
  );
}

export default App
