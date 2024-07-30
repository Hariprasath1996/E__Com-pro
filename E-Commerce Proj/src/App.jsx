import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import EarBudsEle from './Components/EarBuds/EarBudsEle';
import MobileComp from './Components/Mobiles/MobileComp';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/headset" element={<EarBudsEle />} />
        <Route path='/mob' element={<MobileComp/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
