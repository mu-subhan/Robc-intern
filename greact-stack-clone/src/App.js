import React from 'react';
import './App.css';
import Home from './components/Home';
import Program from './components/Program';
import AboutUs from './components/AboutUs';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';

const App = () =>{
  return (
<>
<Home/>
<Program />
<AboutUs />
<Campus/>
<Testimonials/>
<ContactUs/>
</>
  )
}

export default App;
