// Stylefile
import './App.css'

// React imports
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'sonner';

// Import components
import Home from './pages/home/Home.jsx'
import Login from './pages/loginSignUp/Login.jsx'
import SignUp from './pages/loginSignUp/SignUp.jsx'
import Admin from './pages/home/Admin.jsx'
import MainNavbar from './layouts/MainNavbar.jsx';
import HowItWorks from './pages/PagesContainer/HowItWorks.jsx';
import ContactUs from './pages/PagesContainer/ContactUs.jsx';
import AboutUs from './pages/PagesContainer/AboutUs.jsx';

import { ToasterContainer } from './components/toaster/Toaster.jsx';
import MainLayout from './layouts/MainLayout.jsx';

function App() {

  return (
    <div className='app'>
    <div className="navbar">
      <MainNavbar />
    </div>
    <div className='app-contents'>
      <Routes>
        <Route path='/' element={<MainLayout />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/howItWorks' element = {<HowItWorks />} />
        <Route path='/contactUs' element = {<ContactUs />} />
        <Route path='/aboutUs' element = {<AboutUs />} />
        <Route path='*' element={<Home />}/>
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
      
      <ToasterContainer />
      <ToastContainer />
      <Toaster />
      </div>
    </div>
  )
}

export default App
