// Import stylefile
import './Home.scss'

// Import components
import Navbar from '../../layouts/Navbar';
import MainPage from '../PagesContainer/MainPage';
import AboutUs from '../PagesContainer/AboutUs';
import ContactUs from '../PagesContainer/ContactUs';
import HowItWorks from '../PagesContainer/HowItWorks';
import Profile from '../profile/Profile';
import TrackCrime from '../PagesContainer/TrackCrime';

// Import react
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='mainContainer'>
        <Routes>
          <Route path='/mainPage' element = {<MainPage />} />
          <Route path='/trackCrime' element = {<TrackCrime />} />
          <Route path='/howItWorks' element = {<HowItWorks />} />
          <Route path='/contactUs' element = {<ContactUs />} />
          <Route path='/aboutUs' element = {<AboutUs />} />
          <Route path='/profile' element = {<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
