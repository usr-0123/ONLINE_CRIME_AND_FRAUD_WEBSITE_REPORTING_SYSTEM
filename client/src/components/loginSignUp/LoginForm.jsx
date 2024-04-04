// Import react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';

import { ToasterContainer, LoadingToast, SuccessToast, ErrorToast } from '../toaster/Toaster.jsx';

// Import stylefile
import './LoginSignUpForm.scss'

import {
  useAuthenticateUserMutation
} from '../../features/UserApi.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticateUser, { isLoading, isError }] = useAuthenticateUserMutation();

  // LoadingToast(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const storeUserDetailsInLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {

      // Call the authentication mutation
      const response = await authenticateUser({ Email_address: email, Password: password });
  
      // Check if authentication was successful
      if (response.data) {

        const user = response.data.user;

        const User_rank = (response.data.user.User_rank)

        // Store user details in local storage
        storeUserDetailsInLocalStorage(user);

        // Navigate based on User_rank
        if (User_rank === "User") {
          navigate('/mainPage');
          SuccessToast('Login succesful. You logged in as a User')

        } else {
          navigate('/admin/adminDashboard');
          SuccessToast('Login succesful. You logged in as an Admin')

        }
      } else {

        // Handle authentication failure
        ErrorToast('Login credentials incorrect!')
      }
    } catch (error) {

      // Handle error
      console.error('Error during authentication:', error);
    }
  };
  
  return (
    
    <form className='lsForm' onSubmit={handleSubmit}>      
      <div className='lsFormDiv'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className='lsFormDiv'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>Submit</button>
      <ToasterContainer />
    </form>
  );
};

export default LoginForm;

