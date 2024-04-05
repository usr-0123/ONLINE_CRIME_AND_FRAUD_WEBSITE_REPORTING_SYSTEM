import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/loginSignUp/LoginForm';

import './LoginSignUp.scss'

const Login = () => {
  
  const navigate = useNavigate()

  return (
    <div className='lsComponent'>
      <h1 className='lsComponentHeader'>Sign in to your account</h1>
      <span className='lsComponentSpan'> No account? <p onClick={() => navigate('/signUp')}>Sign up</p></span>
      <div className='lsComponentForm'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
