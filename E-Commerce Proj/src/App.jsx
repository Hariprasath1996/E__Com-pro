import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      {/* <Route  path="/" element={<Home cart={cart} setCart={setCart} /> }></Route> */}
    </Routes>
    </BrowserRouter>
  )
}
export default App
