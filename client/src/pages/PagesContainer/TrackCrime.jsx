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
      />
      {queryLoading && <p>Loading...</p>}
      {error && <p>We cannot find crime by the tracking number given, please check the crime number and try again</p>}
      {crimeData && (
        <div>
          <h2>Crime Details</h2>
          <p>Crime ID: {crimeData[0].CrimeStatus}</p>
        </div>
      )}
    </div>
  );
};

export default TrackCrime;
