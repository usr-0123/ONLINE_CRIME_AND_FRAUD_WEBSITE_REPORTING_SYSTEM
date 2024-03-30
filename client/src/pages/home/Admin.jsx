// Import stylefile
import './Home.scss'

// Import components
import AdminDashboard from '../Admin/AdminDashboard';
import Navbar from '../../layouts/AdminNavbar';
import AboutUs from '../PagesContainer/AboutUs';
import Status from '../Admin/Status';
import Categories from '../../components/admin/CrimeCategories'
import HowItWorks from '../PagesContainer/HowItWorks';

// Import react
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='home'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='mainContainer'>
        <Routes>
          <Route path='/adminDashboard' element = {<AdminDashboard />}/>
          <Route path='/howItWorks' element = {<HowItWorks />} />
          <Route path='/status' element = {<Status />} />
          <Route path='/categories' element = {<Categories />} />
          <Route path='/aboutUs' element = {<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
