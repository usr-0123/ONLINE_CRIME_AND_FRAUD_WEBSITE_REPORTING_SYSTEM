import React, { useState } from 'react';
import './CrimeForm.scss';
import { useAddCrimeMutation } from '../../features/CrimeApi.js';

const CrimeForm = () => {
  const [crimeCategory, setCrimeCategory] = useState('');
  const [crimeDate, setCrimeDate] = useState('');
  const [involvedParties, setInvolvedParties] = useState('');
  const [comment, setComment] = useState('');
  const [anonymity, setAnonymity] = useState('');

  // Retrieve UserID from local storage
  const userId = JSON.parse(localStorage.getItem('userData')).UserID;

  // console.log("Logged UserID",userId);

  const [addCrime, { isLoading, isError }] = useAddCrimeMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const crimeData = {
        UserID: userId,
        CrimeDate: crimeDate,
        CrimeCategory: crimeCategory,
        Involved_parties: involvedParties,
        Comment: comment,
        Anonimity: anonymity
      }

      console.log("Logged crimeData", crimeData);

      // Call the add crime mutation
      await addCrime(crimeData);

      // Reset form fields after successful submission
      setCrimeCategory('');
      setCrimeDate('');
      setInvolvedParties('');
      setComment('');
      setAnonymity('');
    } catch (error) {
      console.error('Error while adding crime:', error);
    }
  };

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

  return (
    <div className='CrimeForm'>
      <span className='CrimeFormHeader'>Enter the details of the crime or fraud below:</span>
      <form className='NewCrimeForm' onSubmit={handleSubmit}>
        <div className='MainPageNewFormCrimeType'>
          <select name="Crime" value={crimeCategory} onChange={(e) => setCrimeCategory(e.target.value)}>
            <option value="">Select crime or fraud...</option>
            {crimes.map((crime, i) => (
              <option value={crime} key={i}>{crime}</option>
            ))}
          </select>
        </div>
        <div className='MainPageNewFormDate'>
          <input type="date" value={crimeDate} onChange={(e) => setCrimeDate(e.target.value)} />
          <input type="time" />
          <select value={anonymity} onChange={(e) => setAnonymity(e.target.value)}>
            <option value="">Select anonimity...</option>
            <option value="Anonimous">Anonimous</option>
            <option value="Public">Public</option>
          </select>
        </div>
        <div className='MainPageNewFormParties'>
          <input type="text" placeholder='Enter involved individuals or organisations...' value={involvedParties} onChange={(e) => setInvolvedParties(e.target.value)} />
          <input type="text" placeholder='Enter crime description...' value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <div className='MainPageNewFormEvidence'>
          <input type="file" />
        </div>
        <button type="submit" disabled={isLoading}>Submit Report</button>
        {isError && <div>Unable to submit crime report</div>}
      </form>
    </div>
  );
};

export default CrimeForm;
