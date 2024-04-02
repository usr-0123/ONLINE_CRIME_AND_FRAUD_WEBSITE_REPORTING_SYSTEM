import React, {useEffect, useState} from 'react';

import './CrimeReportsList.scss'

import { FaChevronRight } from "react-icons/fa";

import { useDeleteCrimeMutation, useGetCrimesQuery } from '../../features/CrimeApi';

const CrimeReports = () => {
    const { data:crimeEntries, error, isLoading, refetch } = useGetCrimesQuery();
    const [deleteCrimeMutation] = useDeleteCrimeMutation();

    useEffect(() => {
      refetch(); // Fetch data initially
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>; // Render loading indicator
    }
  
    if (error) {
      return <div>Error: {error.message}</div>; // Render error message
    }

    
    const handleDelete = async (CrimeID) => {
        try {
          await deleteCrimeMutation(CrimeID);
          refetch(); // Refetch data after deletion
        } catch (error) {
          console.error('Error deleting crime:', error);
        }
    };
    
  return (
    <div className="crimeReports">
        <ul className='crimeAllReportsUList'>
            {crimeEntries.map((entry, index) => (
            <div className='crimeAllReportsUListContainer'>
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
                    <span className='crimeAllReportEntryHeader'>Anonimity:</span>
                    <span className='crimeAllReportEntryBtn'>{entry.Anonimity}</span>
                </div>
            </li>
            <div className='actionsTab'>
            <button onClick={() => handleDelete(entry.CrimeID)}>Delete</button>
                <button>Delete</button>
                <button>Resolve</button>
                <button>Report</button>
            </div>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default CrimeReports;
