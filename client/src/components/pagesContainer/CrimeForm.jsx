import React, { useState } from 'react';
import './CrimeForm.scss';
import { useAddCrimeMutation, useUploadMutation } from '../../features/CrimeApi.js';
import { SuccessToast, ErrorToast } from '../toaster/Toaster.jsx';
import BeatLoader from 'react-spinners/BeatLoader';

const CrimeForm = () => {
  const [crimeCategory, setCrimeCategory] = useState('');
  const [crimeDate, setCrimeDate] = useState('');
  const [crimeTime, setCrimeTime] = useState('');
  const [involvedParties, setInvolvedParties] = useState('');
  const [comment, setComment] = useState('');
  const [anonymity, setAnonymity] = useState('');
  const [file, setFile] = useState(null);
  const userId = JSON.parse(localStorage.getItem('userData')).UserID;
  const [addCrime, { isLoading, isError }] = useAddCrimeMutation();
  const [upload] = useUploadMutation();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Upload file first
      const { data: imageUrl } = await upload(file);

      // Prepare crime data with file URL
      const crimeData = {
        UserID: userId,
        CrimeDate: crimeDate,
        CrimeTime: crimeTime,
        CrimeCategory: crimeCategory,
        Involved_parties: involvedParties,
        Comment: comment,
        Anonimity: anonymity,
        FileUrl: imageUrl,
      };

      // Add crime data to the database
      await addCrime(crimeData);

      SuccessToast('Crime reported successfully. Check your email for the tracking number');

      // Reset form fields after successful submission
      setCrimeCategory('');
      setCrimeDate('');
      setCrimeTime('');
      setInvolvedParties('');
      setComment('');
      setAnonymity('');
      setFile(null); // Reset file state
    } catch (error) {
      console.error('Error while adding crime:', error);
      ErrorToast('Failed to report crime. Please try again.');
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
        <div className='MainPageNewFormParties'>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit" disabled={isLoading}> {isLoading ? <BeatLoader color='#103777'/> : 'Submit Report'} </button>
        {isError && <div style={{color:'#fff'}}>Please provide all the fields required</div>}
      </form>
    </div>
  );
};

export default CrimeForm;
