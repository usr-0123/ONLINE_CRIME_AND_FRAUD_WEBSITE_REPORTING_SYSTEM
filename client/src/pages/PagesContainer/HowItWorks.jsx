// Import stylefile
import './HowItWorks.scss'

// Import components

// Import react
import React from 'react';

const HowItWorks = () => {
  return (
    <div className='HowItWorks'>
        <p>Reporting a crime or fraud on ORS is quick and easy. Follow these simple steps to submit a report and take action against online criminals:</p>
        <ul className='HowItWorksSteps'>
          <li className='even'>
            <span>Step 1</span>
            <p>Access Our Reporting Platform Visit ORS website and navigate to any of the  "Report Crime/Fraud" button. If you haven't already, you may need to register an account or log in to access the reporting form.</p>
          </li>   
          <li className='odd'>
            <span>Step 2</span>
            <p>Provide Details Fill out the reporting form with as much detail as possible. Include information such as the type of crime or fraud, the date and time of occurrence, any individuals or organizations involved, and any evidence you may have, such as screenshots or documents.</p>
          </li>
          <li className= 'even'>
            <span>Step 3</span>
            <p>Choose Anonymity Option Choose whether you wish to submit the report anonymously or provide your contact information. Rest assured that if you choose to remain anonymous, your identity will be protected throughout the process.</p>
          </li>
          <li className='odd'>
            <span>Step 4</span>
            <p>Submit Your Report Once you've completed the form, review the information for accuracy and click the "Submit" button to send your report to our team.</p>
          </li>
          <li className= 'even'>
            <span>Step 5</span>
            <p>Tracking Your Report After submitting your report, you will receive a confirmation email with a unique reference number. You can use this reference number to track the progress of your report through our platform.</p>
          </li>
          <li className='odd'>
            <span>Step 6</span>
            <p>Investigation and Follow-Up Our team will review your report and take appropriate action, which may include further investigation, collaboration with law enforcement agencies, or dissemination of information to relevant authorities. We'll keep you informed about any updates or developments related to your report.</p>
          </li>
          <li className= 'even'>
            <span>Step 7</span>
            <p>Resolution Once the investigation is complete, we will notify you of the outcome and any actions taken. If necessary, we may provide guidance on next steps or resources available to you.</p>
          </li>
          <li className='odd'>
            <span>Step 8</span>
            <p>Stay Informed Continue to stay vigilant and informed about online threats and best practices for protecting yourself and others from cybercrime and fraud. Consider joining our community and participating in discussions, sharing resources, and raising awareness about digital safety.</p>
          </li>
          <li className= 'even'>
            <span>Step 9</span>
            <p>Report Again (If Necessary) If you encounter or become aware of any additional incidents of online crime or fraud, don't hesitate to submit another report through our platform. Your continued vigilance and cooperation are essential in the ongoing fight against digital threats.</p>
          </li>
        </ul>
    </div>
  );
};

export default HowItWorks;
