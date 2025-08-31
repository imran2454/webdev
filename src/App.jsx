import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/services/Services'
import Services from './pages/services/Services'
import Pricing from './pages/pricing/Pricing'
import Portfolio from './pages/portfolio/Portfolio'
import Testimonials from './pages/testimonial/Testimonial'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <section id='hero'>
        <Home/>
      </section>
      
      <section id='services'>
        <Services/>
      </section>
      <section id='pricing'>
        <Pricing/>
      </section>
      <section id='portfolio'>
        <Portfolio/>
      </section>
       <section id='testimonial'>
        <Testimonials/>
      </section>
       <section id='contact'>
        <Contact/>
      </section>
      <Footer/>
      
     
      


    </div>
  )
}

export default App