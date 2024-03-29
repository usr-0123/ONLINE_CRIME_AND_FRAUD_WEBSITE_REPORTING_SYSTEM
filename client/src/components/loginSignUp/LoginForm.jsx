// Import react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import stylefile
import './LoginSignUpForm.scss'

const LoginForm = () => {
const navigate = useNavigate()

  return (
    <form className='lsForm'>
      <div className='lsFormDiv'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
        />
      </div>
      <div className='lsFormDiv'>
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
      <button type="submit" onClick={() => navigate('/mainPage')}>Submit</button>
      <button type="submit" onClick={() => navigate('/admin/adminDashboard')}>Admin</button>
    </form>
  );
};

export default LoginForm;
