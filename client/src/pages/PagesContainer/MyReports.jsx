import React from 'react';

import './MyReports.scss'

import CrimeReports from '../../components/pagesContainer/CrimeReports';

// Functional component example
const MyReports = () => {
  return (
    <div className='MainPageHistory'>
        <span className='MainPageNewHeader'>Your Reported cases</span>
        <CrimeReports />
    </div>
  );
};

export default MyReports;
