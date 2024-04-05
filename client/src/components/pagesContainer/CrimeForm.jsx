import React, { useState } from 'react';
import './CrimeForm.scss';
import { useAddCrimeMutation } from '../../features/CrimeApi.js';
import { ToasterContainer, SuccessToast, ErrorToast } from '../toaster/Toaster.jsx';
import BeatLoader from 'react-spinners/BeatLoader'

const CrimeForm = () => {
  const [crimeCategory, setCrimeCategory] = useState('');
  const [crimeDate, setCrimeDate] = useState('');
  const [crimeTime, setCrimeTime] = useState('');
  const [involvedParties, setInvolvedParties] = useState('');
  const [comment, setComment] = useState('');
  const [anonymity, setAnonymity] = useState('');
  const userId = JSON.parse(localStorage.getItem('userData')).UserID;
  const [addCrime, { isLoading, isError }] = useAddCrimeMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const crimeData = {
        UserID: userId,
        CrimeDate: crimeDate,
        CrimeTime: crimeTime,
        CrimeCategory: crimeCategory,
        Involved_parties: involvedParties,
        Comment: comment,
        Anonimity: anonymity
      }

      await addCrime(crimeData);

      SuccessToast('Crime reported successfully. Check your email for the tracking number')

      setCrimeCategory('');
      setCrimeDate('');
      setCrimeTime('');
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
          <input type="time" value={crimeTime} onChange={(e) => setCrimeTime(e.target.value)}/>
        </div>
        <div className='MainPageNewFormCrimeType'>
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
        <button type="submit" disabled={isLoading}> {isLoading ? <BeatLoader color='#103777'/> : 'Submit Report'} </button>
        {isError && <div>Please provide all the fields required</div>}
      </form>
    </div>
  );
};

export default CrimeForm;
