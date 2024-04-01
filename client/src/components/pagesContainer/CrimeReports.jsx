import React from 'react';

import './CrimeReports.scss'

import { useGetCrimeByIDQuery } from '../../features/CrimeApi';

const CrimeReports = () => {

  return (
    <div className="crimeReports">
        <ul className='crimeAllReportsUList'>
            <li className='crimeAllReportsHeader'>
                <div className='AllReportEntry'>
                    <span>Reference Number:</span>
                </div>
                <div className='AllReportEntry'>
                    <span>Crime Type: </span>
                </div>
                <div className='AllReportEntry'>
                    <span>Date/Time: </span>
                </div>
                <div className='AllReportEntry'>
                    <span>Involved Individuals: </span>
                </div>
                <div className='AllReportEntry'>
                    <span>Involved Organizations: </span>
                </div>
                <div className='AllReportEntry'>
                    <span>Evidence: </span>
                </div>
            </li>
          {/* {crimeEntries.map((entry, index) => ( */}
            <li key={index} className='crimeAllReportsList'>
                <div className='AllReportEntry'>
                    <span>entry.referenceNumber</span>
                </div>
                <div className='AllReportEntry'>
                    <span>entry.crimeType</span>
                </div>
                <div className='AllReportEntry'>
                    <span>entry.date</span>
                </div>
                <div className='AllReportEntry'>
                    <span>entry.involvedIndividuals</span>
                </div>
                <div className='AllReportEntry'>
                    <span>entry.involvedOrganizations</span>
                </div>
                <div className='AllReportEntry'>
                    <span>entry.evidence</span>
                </div>
            </li>
          {/* ))} */}
        </ul>
    </div>
  );
};

export default CrimeReports;
