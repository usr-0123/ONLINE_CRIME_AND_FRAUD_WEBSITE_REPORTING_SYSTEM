import React, { useState } from 'react';
import { useUpdateCrimeMutation } from "../../features/CrimeApi";

const CrimeEditForm = () => {
  const [crimeDate, setCrimeDate] = useState('');
  const [crimeCategory, setCrimeCategory] = useState('');
  const [involvedParties, setInvolvedParties] = useState('');
  const [comment, setComment] = useState('');
  const [anonymity, setAnonymity] = useState('');
  const [updateCrime, { isLoading, isError }] = useUpdateCrimeMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateCrime({
        CrimeDate: crimeDate,
        CrimeCategory: crimeCategory,
        Involved_parties: involvedParties,
        Comment: comment,
        Anonimity: anonymity
      });

      console.log('Crime updated successfully:', response);
    } catch (error) {
      console.error('Error updating crime:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="crimeDate">Crime Date:</label>
        <input 
          type="date" 
          id="crimeDate" 
          value={crimeDate} 
          onChange={(e) => setCrimeDate(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="crimeCategory">Crime Category:</label>
        <select 
          id="crimeCategory" 
          value={crimeCategory} 
          onChange={(e) => setCrimeCategory(e.target.value)} 
          required
        >
          <option value="">Select crime category...</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
        </select>
      </div>
      <div>
        <label htmlFor="involvedParties">Involved Parties:</label>
        <input 
          type="text" 
          id="involvedParties" 
          value={involvedParties} 
          onChange={(e) => setInvolvedParties(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea 
          id="comment" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="anonymity">Anonymity:</label>
        <select 
          id="anonymity" 
          value={anonymity} 
          onChange={(e) => setAnonymity(e.target.value)} 
          required
        >
          <option value="">Select anonymity...</option>
          <option value="Anonymous">Anonymous</option>
          <option value="Public">Public</option>
        </select>
      </div>
      <button type="submit" disabled={isLoading}>Submit</button>
      {isError && <div>Error: Unable to update crime</div>}
    </form>
  );
};

export default CrimeEditForm;
