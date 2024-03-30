// Import stylefile
import './PageContainer.scss'

// Import components
import CrimeForm from '../../components/pagesContainer/CrimeForm';
import CrimeReports from '../../components/pagesContainer/CrimeReports';

// Import react
import React from 'react';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='MainPageNew'>
        <CrimeForm />
      </div>
      <div className='MainPageHistory'>
        <span className='MainPageNewHeader'>Your Reported cases</span>
        <div className='historyReports'>
          <CrimeReports />
        </div>
      </div>
    </div>
  );
};

export default MainPage;