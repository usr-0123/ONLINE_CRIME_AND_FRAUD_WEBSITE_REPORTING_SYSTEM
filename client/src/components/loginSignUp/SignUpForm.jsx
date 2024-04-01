import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUpForm.scss';
import { useRegisterUserMutation } from '../../features/UserApi';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the input fields are empty
    if (!firstName || !lastName || !email || !password) {
        console.error('Please fill out all fields');
        return; // Prevent form submission
      }
      
    try {
      // Call the register user mutation
      const response = await registerUser({ First_name:firstName, Last_name:lastName, Email_address:email, Password:password });

      // Check if registration was successful
      if (response.data) {
        // Redirect to main page after registration
        navigate('/mainPage');
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle error
      console.error('Error during registration:', error);
    }
  };

  return (
    <form className='lsForm' onSubmit={handleSubmit}>
      <div className='lsFormNames'>
        <div className='lsFormNamesContainer'>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className='lsFormNamesContainer'>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
      </div>
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
      <button type="submit" disabled={isLoading}>Register</button>
      {isError && <div>Unable to register your details</div>}
    </form>
  );
};

export default SignUpForm;
