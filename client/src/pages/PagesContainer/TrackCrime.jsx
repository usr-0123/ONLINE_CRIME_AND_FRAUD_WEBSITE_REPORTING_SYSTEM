import React, { useState, useEffect } from 'react';
import './TrackCrime.scss';
import { useGetCrimeByIDQuery } from '../../features/CrimeApi';
import { ToasterContainer, SuccessToast, ErrorToast } from '../../components/toaster/Toaster';
import ScaleLoader from 'react-spinners/ScaleLoader'

const TrackCrime = () => {
  const [crimeID, setCrimeID] = useState('');
  const [crimeData, setCrimeData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: response, error, loading } = useGetCrimeByIDQuery(crimeID);

  useEffect(() => {
    if (response) {
      setCrimeData(response);
      setIsLoading(false);
      setIsError(false);
    } else if (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [response, error]);

  const handleInputChange = (e) => {
    setCrimeID(e.target.value);
  };

  console.log("Logged entry data:", crimeData);

  return (
    <div className="track-crime">
      <input
        type="text"
        value={crimeID}
        onChange={handleInputChange}
        placeholder="Enter Crime ID"
        className='track-crime-input'
      />

      <div>{loading ? <ScaleLoader /> : ! <ScaleLoader />}</div>
      
      {crimeData && crimeData.length > 0 ? (
          <div className='track-crime-data'>
            <div className='track-crime-data-left'>
            <span>
              <h2>Crime Details</h2>
            </span>
            <span>
              <p>Anonymity status: {crimeData[0].Anonimity}</p>
            </span>
            <span>
              <p>Report Progress: {crimeData[0].CrimeStatus}</p>
            </span>
            <span>
              <p>Crime Date: {crimeData[0].CrimeDate}</p>
            </span>
            <span>
              <p>Crime Time: {crimeData[0].CrimeTime}</p>
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
            <div className='track-crime-data-right'>
              <img src={crimeData[0].FileUrl} alt="" />
            </div>
          </div>
        ) : (
          <div style={{color:'#fff'}}>There is no entries for the tracking number entered</div>
        )
      }
    </div>
  );
};

export default TrackCrime;
