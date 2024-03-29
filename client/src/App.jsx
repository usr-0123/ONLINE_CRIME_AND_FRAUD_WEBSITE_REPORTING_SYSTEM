// Stylefile
import './App.css'

// React imports
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

// Import components
import Home from './pages/home/Home.jsx'
import Login from './pages/loginSignUp/Login.jsx'
import SignUp from './pages/loginSignUp/SignUp.jsx'
import Admin from './pages/home/Admin.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='*' element={<Home />}/>
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
