import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import Analytics from './Components/analytics'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App
