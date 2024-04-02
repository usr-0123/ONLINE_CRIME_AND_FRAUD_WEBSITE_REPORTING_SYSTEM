import React from 'react';

import './AdminDashboard.scss'

// Import component
import CrimeReports from '../../components/admin/CrimeReportsList'

// Define a functional component named AdminDashboard
const AdminDashboard = () => {
  return (
    <div className='AdminDashboard'>
      <p className='AdminDashboardReportsHeader'>The following are crime reports submitted:</p>
      <div className='AdminDashboardReports'>
        <CrimeReports />
      </div>
    </div>
  );
};

export default AdminDashboard;
