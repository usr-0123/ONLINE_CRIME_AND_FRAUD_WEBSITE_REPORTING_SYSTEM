// Import stylefile
import './ContactUs.scss'

// Import components

// Import react
import React from 'react';

const ContactUs = () => {
  return (
    <div className='contactUsContainer'>
      <span className='contactUsHeader'>Any Inquiry? Reach us out now!</span>
      <div className='contactUsContainer2'>
        <div className='contactUsDiv'></div>
        <form action="" className='contactUsForm'>
          <div className='contactUsFormDiv'>
            <label htmlFor="fullNames">Full Name:</label>
            <input type="text" placeholder='Enter your full names...'/>
          </div>
          <div className='contactUsFormDiv'>
            <label htmlFor="email">Email Address:</label>
            <input type="email" placeholder='Enter your email adress...'/>
          </div>
          <div className='contactUsFormDiv'>
            <label htmlFor="subject">Subject:</label>
            <input type="text" placeholder='Subject...'/>
          </div>
          <div className='contactUsFormDiv'>
            <label htmlFor="comments">Comments:</label>
            <input type="text" placeholder='Enter your comments here...'/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
