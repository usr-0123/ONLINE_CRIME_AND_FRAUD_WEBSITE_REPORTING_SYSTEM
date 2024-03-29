// Import react
import React from 'react';

// Import components
import SignUpForm from '../../components/loginSignUp/SignUpForm';
import { useNavigate } from 'react-router-dom';

// import stylefile
import './LoginSignUp.scss'

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <div className='lsComponent'>
      <h1 className='lsComponentHeader'>SignUp to your account</h1>
      <span className='lsComponentSpan'>Already have an account?<p onClick={() => navigate('/')}>Login</p></span>
      <div className='lsComponentForm'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
