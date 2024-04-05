// Import react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Library imports
import { LoadingToast, SuccessToast, ErrorToast } from '../toaster/Toaster.jsx';

// Import stylefile
import './LoginSignUpForm.scss'

// API import
import { useAuthenticateUserMutation } from '../../features/UserApi.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticateUser, { isLoading, isError }] = useAuthenticateUserMutation();

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

      const response = await authenticateUser({ Email_address: email, Password: password });
  
      if (response.data) {

        const user = response.data.user;

        const User_rank = (response.data.user.User_rank)

        storeUserDetailsInLocalStorage(user);

        if (User_rank === "User") {
          navigate('/mainPage');
          SuccessToast('Login succesful. You logged in as a User')

        } else {
          navigate('/admin/adminDashboard');
          SuccessToast('Login succesful. You logged in as an Admin')
        }
      } else {
        ErrorToast('Login credentials incorrect!')
      }
    } catch (error) {
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
    </form>
  );
};

export default LoginForm;

