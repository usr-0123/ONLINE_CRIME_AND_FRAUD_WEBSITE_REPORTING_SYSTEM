// Import stylefile
import './ContactUs.scss'

// Import icons
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

// Import react
import React from 'react';

const ContactUs = () => {
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
