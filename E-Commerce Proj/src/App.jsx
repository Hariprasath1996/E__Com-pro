import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer"
import About from './Components/About/About'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
