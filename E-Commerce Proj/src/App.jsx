import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import SubHeading from './Components/Body/SectionOne/SubHeading'
import Multiple from './Components/Body/SectionTwo/Multiple/Multiple'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <SubHeading />
          <Multiple />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
