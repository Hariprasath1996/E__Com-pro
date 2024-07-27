import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import SubHeading from './Components/Body/SectionOne/SubHeading'
import Multiple from './Components/Body/SectionTwo/Multiple/Multiple'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeading />
        <Multiple />
        <Routes>
          {/* <Route  path="/" element={ }></Route> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  )
}
export default App
