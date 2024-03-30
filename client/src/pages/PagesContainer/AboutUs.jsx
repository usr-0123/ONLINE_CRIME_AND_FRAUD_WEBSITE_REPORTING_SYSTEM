// Import stylefile
import './AboutUs.scss'

// Import components

// Import react
import React from 'react';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <span className='headers'>About Us</span>
      <div className='aboutUsTop'>
          {/* <span>About Us</span> */}
          <p>Welcome to Online Crime Reporting Site (ORS), your trusted platform for reporting online crime and fraud.</p>
          <p>At ORS, we are committed to creating a safer online environment by empowering individuals to report incidents of crime and fraud with ease and confidence.</p>
          <p>Our mission is simple: to provide a secure and anonymous platform where users can report suspicious activities, fraudulent schemes, cybercrimes, and other illicit behaviors occurring in the digital realm.</p>
          <p>We believe that by enabling swift and efficient reporting, we can help law enforcement agencies, regulatory bodies, and other relevant authorities take action against perpetrators and prevent further harm to individuals and businesses alike.</p>
      </div>
      <span className='headers'>Why choose us</span>
      <div className='aboutUsMiddle'>
        {/* <span>Why choose us</span> */}
        <ul>
          <li>
            <p>Anonymity and Confidentiality:</p>
            <span>We prioritize your privacy and security. Our platform allows users to report crimes and frauds anonymously, ensuring that your identity remains protected throughout the reporting process.</span>
          </li>
          <li>
            <p>User-Friendly Interface:</p>
            <span>Reporting a crime or fraud should be simple and straightforward. Our intuitive interface guides you through the reporting process step-by-step, making it easy for anyone to submit a report.</span>
          </li>
          <li>
            <p>Secure Platform:</p>
            <span>Your safety is our top priority. We utilize advanced encryption and security measures to safeguard your data and ensure that your information remains protected from unauthorized access.</span>
          </li>
          <li>
            <p>Transparent and Accountable:</p>
            <span>We believe in transparency and accountability. Once you submit a report, you can track its progress and stay informed about any updates or developments related to your case.</span>
          </li>
        </ul>
      </div>
      <span className='headers'>Our Team</span>
      <div className='aboutUsBody'>
        {/* <span>Our Team</span> */}
        <p>Behind ORS is a dedicated team of professionals with expertise in cybersecurity, law enforcement, and technology. We are passionate about leveraging technology to combat online crime and fraud and are committed to providing the best possible experience for our users.</p>
      </div>
      <span className='headers'>Get Involve</span>
      <div className='aboutUsBottom'>
        {/* <span>Get Involve</span> */}
        <p>Join us in the fight against online crime and fraud. Whether you've been a victim yourself or simply want to contribute to creating a safer online environment, your participation is crucial. Together, we can make a difference and protect ourselves and our communities from digital threats. Thank you for choosing ORS. We look forward to serving you and working together to build a safer digital future.</p>
      </div>
    </div>
  );
};

export default AboutUs;
