import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import SubHeading from './Components/Body/SectionOne/SubHeading'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    
    <Routes>
      {/* <Route  path="" element={<SectionOne  /> }></Route> */}
    </Routes>
    <SubHeading />
    </BrowserRouter>
  )
}
export default App
