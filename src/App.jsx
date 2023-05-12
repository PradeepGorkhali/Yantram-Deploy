import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import SingleproductPage from './Pages/SingleproductPage'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'



function App() {
  

  return (
    <>
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/singleproduct" element={<SingleproductPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App
