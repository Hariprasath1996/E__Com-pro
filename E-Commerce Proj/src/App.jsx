import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* <Route  path="/" element={<Home cart={cart} setCart={setCart} /> }></Route> */}
    </Routes>
    </BrowserRouter>
  )
}
export default App
