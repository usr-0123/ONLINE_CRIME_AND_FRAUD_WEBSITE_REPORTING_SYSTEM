import React from 'react';

import './CrimeReportsList.scss'

import { FaChevronRight } from "react-icons/fa";

import { useGetCrimesQuery } from '../../features/CrimeApi';

const CrimeReports = () => {

    const { data:crimeEntries } = useGetCrimesQuery()

  return (
    <div className="crimeReports">
        <ul className='crimeAllReportsUList'>
            {crimeEntries.map((entry, index) => (
            <li key={index} className='crimeAllReportsList'>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Reference Number:</span>
                    <span>{entry.CrimeID}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Crime Type: </span>
                    <span>{entry.CrimeCategory}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Date: </span>
                    <span>{entry.CrimeDate}</span>
                </div>
                {/* <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Time: </span>
                    <span>{entry.time}</span>
                </div> */}
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Involved Parties: </span>
                    <span>{entry.Involved_parties}</span>
                </div>
                {/* <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Involved Organizations: </span>
                    <span>{entry.involvedOrganizations}</span>
                </div> */}
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Evidence: </span>
                    <span>{entry.evidence}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Actions:</span>
                    <span className='crimeAllReportEntryBtn'>{entry.action}</span>
                </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default CrimeReports;
