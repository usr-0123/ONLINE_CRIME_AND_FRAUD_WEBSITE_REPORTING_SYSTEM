// Import react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Stylefile
import './LoginSignUpForm.scss'

const SignUpForm = () => {
    const navigate = useNavigate()

  return (
    <form className='lsForm'>
        <div className='lsFormNames'>
            <div className='lsFormNamesContainer'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" />
            </div>
            <div className='lsFormNamesContainer'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" />
            </div>
        </div>
        <div className='lsFormDiv'>
            <label htmlFor="email">Email</label>
            <input type="email" />
        </div>
        <div className='lsFormDiv'>
            <label htmlFor="password">Password</label>
            <input type="password" />
        </div>
        <button type="submit" onClick={() => navigate('/mainPage')}>User</button>
        <button type="submit" onClick={() => navigate('/admin/adminDashboard')}>Admin</button>
    </form>
  );
};

export default SignUpForm;
