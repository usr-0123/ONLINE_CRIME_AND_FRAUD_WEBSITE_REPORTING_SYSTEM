import './PageContainer.scss'

import CrimeForm from '../../components/pagesContainer/CrimeForm';
import CrimeReports from '../../components/pagesContainer/CrimeReports';

import React from 'react';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='MainPageNew'>
        <CrimeForm />
      </div>
    </div>
  );
};

export default MainPage;