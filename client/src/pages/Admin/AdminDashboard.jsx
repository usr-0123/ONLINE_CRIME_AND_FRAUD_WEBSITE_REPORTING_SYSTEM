import React from 'react';

import './AdminDashboard.scss'

import CrimeReports from '../../components/admin/CrimeReportsList'

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
