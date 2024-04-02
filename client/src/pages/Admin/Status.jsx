
import React, { useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa";
import './Status.scss'
import { useGetCrimesQuery } from '../../features/CrimeApi';

const Status = () => {
  const { data: crimeEntries, isLoading, isError, refetch } = useGetCrimesQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className='Status'>
      <ul className='StatusList'>
        <div className='StatusHeader'>
          <div className='statusEntry'>
            <span>Reference Number</span>
          </div>
          <div className='statusEntry'>
              <span>Crime Category</span>
          </div>
          <div className='statusEntry'>
              <span>Date/Time</span>
          </div>
          <div className='statusEntry'>
              <span>Progress</span>
          </div>
          <div className='statusEntry'>
            <span className='statusEntryBtn'>Anonimity</span>
          </div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error occurred while fetching data</div>
        ) : (
          crimeEntries.map((entry, index) => (
            <li key={index} className='StatusListEntries'>
              <div className='statusEntry'>
                <span>{entry.CrimeID}</span>
              </div>
              <div className='statusEntry'>
                <span>{entry.CrimeCategory}</span>
              </div>
              <div className='statusEntry'>
                <span>{entry.CrimeDate}</span>
              </div>
              <div className='statusEntry'>
                <span>{entry.CrimeStatus}</span>
              </div>
              <div className='statusEntry'>
                <span className='statusEntryBtn'>{entry.Anonimity}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Status;