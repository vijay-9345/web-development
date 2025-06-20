import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
//import './App.css'
import Skills from './Skills'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import Services from './Pages/Services'
import About from './Pages/About'
import Navbar from './component/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'
import Effect from './hooks/Effect'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/> 
      <Route path='/state' element={<State/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/Effect' element={<Effect/>}/>
    </Routes>
    

    </>
  )
}

export default App