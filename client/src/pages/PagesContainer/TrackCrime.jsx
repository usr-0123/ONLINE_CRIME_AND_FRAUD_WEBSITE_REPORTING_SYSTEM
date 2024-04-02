import React, { useState, useEffect } from 'react';
import './TrackCrime.scss';
import { useGetCrimeByIDQuery } from '../../features/CrimeApi';

const TrackCrime = () => {
  const [crimeID, setCrimeID] = useState('');
  const [crimeData, setCrimeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: response, error, isLoading: queryLoading } = useGetCrimeByIDQuery(crimeID);

  useEffect(() => {
    if (response) {
      setCrimeData(response);
      setIsLoading(false);
    } else if (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [response, error]);

  const handleInputChange = (e) => {
    setCrimeID(e.target.value);
  };

  return (
    <div className="track-crime">
      <input
        type="text"
        value={crimeID}
        onChange={handleInputChange}
        placeholder="Enter Crime ID"
        className='track-crime-input'
      />
      
      {queryLoading && <p>Loading...</p>}
      {isError && <p>We cannot find crime by the tracking number given, please check the crime number and try again</p>}
      {crimeData && (
        <div className='track-crime-data'>
          <span>
            <h2>Crime Details</h2>
          </span>
          <span>
            <p>Anonimity status: {crimeData[0].Anonimity}</p>
          </span>
          <span>
            <p>Report Progress: {crimeData[0].CrimeStatus}</p>
          </span>
          <span>
            <p>Crime Date: {crimeData[0].CrimeDate}</p>
          </span>
          <span>
            <p>Category: {crimeData[0].CrimeCategory}</p>
          </span>
          <span>
            <p>Involved parties: {crimeData[0].Involved_parties}</p>
          </span>
          <span>
            <p>Comments: {crimeData[0].Comment}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default TrackCrime;
