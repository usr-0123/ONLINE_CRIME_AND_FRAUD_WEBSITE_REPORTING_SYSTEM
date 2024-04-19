import './ContactUs.scss';
import { CiLocationOn } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import React, { useState } from 'react';
import { ScaleLoader } from "react-spinners/ScaleLoader";
import { ErrorToast, SuccessToast, LoadingToast } from '../../components/toaster/Toaster';

import { useContactUsMutation } from '../../features/CrimeApi';

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comments, setComments] = useState('');

  const [contactUsMutation, { isLoading, isError, isSuccess }] = useContactUsMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      LoadingToast(true)

      await contactUsMutation({
        Full_name: fullName,
        Email_address: email,
        Subject: subject,
        Comments: comments,
      });

      LoadingToast(false)

      SuccessToast('Response sent successfully')

      setFullName('');
      setEmail('');
      setSubject('');
      setComments('');
    } catch (error) {
      ErrorToast('There was an error submitting your response')
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='contactUsContainer'>
      <span className='contactUsHeader'>Any Inquiry? Reach us out now!</span>
      <div className='contactUsContainer2'>
        <div className='contactUsDiv'>
          <span className='contactUsDivHeader'>Contact Information</span>
          <div className='contactUsDivCall'>
            <span>Telephone:</span>
            <span>
              <IoCall /> 01892020
            </span>
            <span>
              <IoCall /> 03425737
            </span>
          </div>
          <div className='contactUsDivMail'>
            <span>Send an Email to:</span>
            <span>
              <MdEmail /> info@ors.org
            </span>
          </div>
          <div className='contactUsDivLocation'>
            <span>We are located:</span>
            <span>
              <CiLocationOn /> Nairobi, Kenya
            </span>
          </div>
        </div>
        <form className='contactUsForm' onSubmit={handleFormSubmit}>
          <div className='contactUsFormDiv'>
            <label htmlFor='fullNames'>Full Name:</label>
            <input
              type='text'
              id='fullNames'
              placeholder='Enter your full names...'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className='contactUsFormDiv'>
            <label htmlFor='email'>Email Address:</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email address...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='contactUsFormDiv'>
            <label htmlFor='subject'>Subject:</label>
            <input
              type='text'
              id='subject'
              placeholder='Subject...'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className='contactUsFormDiv'>
            <label htmlFor='comments'>Comments:</label>
            <input
              id='comments'
              placeholder='Enter your comments here...'
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            />
          </div>
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Sending' : 'Submit'}
            {/* <ScaleLoader color='#103777' /> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
