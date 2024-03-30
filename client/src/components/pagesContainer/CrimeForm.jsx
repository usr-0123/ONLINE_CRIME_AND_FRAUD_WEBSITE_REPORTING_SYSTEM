import React from 'react';

import './CrimeForm.scss'

const crimes = [
  "Phishing",
  "Identity Theft",
  "Credit Card Fraud",
  "Online Scams",
  "Malware Attacks",
  "Cyberbullying",
  "Cyberstalking",
  "Data Breaches",
  "Online Extortion",
  "Online Child Exploitation",
  "Hacking",
  "Fraudulent Investment Schemes",
  "Fake Websites and Phony Offers",
  "Social Engineering",
  "Online Auction Fraud"
];

const CrimeForm = () => {

  return (
    <div className='CrimeForm'>
      <span className='CrimeFormHeader'>Enter the details of the crime or fraud below:</span>
      <form action="" className='NewCrimeForm'>
        <div className='MainPageNewFormCrimeType'>
          <select name="Crime" id="">
            <option value="">Select crime or fraud...</option>
            {crimes.map((crime, i) => (
              <option value={crime} key={i}>{crime}</option>
            ))}
          </select>
        </div>
        <div className='MainPageNewFormDate'>
          <input type="date" />
          <input type="time" />
        </div>
        <div className='MainPageNewFormParties'>
          <input type="text" placeholder='Enter involved individuals...' />
          <input type="text" placeholder='Enter involved organizations...' />
        </div>
        <div className='MainPageNewFormEvidence'>
          <input type="file" />
        </div>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default CrimeForm;
