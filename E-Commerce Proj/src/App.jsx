import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import EarBudsEle from './Components/EarBuds/EarBudsEle';
import MobileComp from './Components/Mobiles/MobileComp';
import TelevisionComp from './Components/Television/TelevisionComp';
import LapComp from './Components/Laptop/LapComp';
import CheckOut from './Components/CheckOut/CheckOut';

const App = () => {
  const [cart,SetCart]=useState([])
  const [checkOut,setCheckOut]=useState([])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/headset" element={<EarBudsEle />} />
        <Route path='/mob' element={<MobileComp />}></Route>
        <Route path='/tv' element={<TelevisionComp />}></Route>
        <Route path='/lap' element={<LapComp />}></Route>
        <Route path='/checkOut' element={<CheckOut />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
