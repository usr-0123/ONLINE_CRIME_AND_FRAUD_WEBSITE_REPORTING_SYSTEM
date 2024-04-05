import './Home.scss'

import AdminDashboard from '../Admin/AdminDashboard';
import AboutUs from '../PagesContainer/AboutUs';
import Status from '../Admin/Status';
import Categories from '../../components/admin/CrimeCategories'
import HowItWorks from '../PagesContainer/HowItWorks';
import Profile from '../profile/Profile';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='home'>

      <div className='mainContainer'>
        <Routes>
          <Route path='/adminDashboard' element = {<AdminDashboard />}/>
          <Route path='/howItWorks' element = {<HowItWorks />} />
          <Route path='/status' element = {<Status />} />
          <Route path='/categories' element = {<Categories />} />
          <Route path='/aboutUs' element = {<AboutUs />} />
          <Route path='/profile' element = {<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
