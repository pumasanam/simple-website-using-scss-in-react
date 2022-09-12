import React from 'react';
import "./App.scss";
import MainNav from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import {Routes,Route} from 'react-router-dom';
import WebImg from "./img/about.png";
const App = () => {
  return (
    <>
    <MainNav/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/contact" element={<Contact/>}/>
        <Route exact path ="/about" element={<About name="About Us" title="Sanam" img={WebImg}/>}/>
        <Route exact path ="/service" element={<Service/>}/>
      </Routes>
    </>
  );
};

export default App;
