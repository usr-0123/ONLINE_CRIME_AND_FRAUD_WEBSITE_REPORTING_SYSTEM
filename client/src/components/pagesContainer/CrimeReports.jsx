import React, { useState, useEffect } from 'react';
import './CrimeReports.scss';
import { useDeleteCrimeMutation, useGetCrimeByUidQuery } from '../../features/CrimeApi';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { ToasterContainer, SuccessToast, ErrorToast, LoadingToast } from '../toaster/Toaster';

import BeatLoader from 'react-spinners/BeatLoader'

const CrimeReports = () => {
  const UserID = JSON.parse(localStorage.getItem('userData')).UserID;
  const [showEditForm, setShowEditForm] = useState(false);
  const [crimeEntries, setCrimeEntries] = useState([]);
  const { data: crimes, isError, isLoading } = useGetCrimeByUidQuery(UserID, { refetchOnReconnect: true });

  useEffect(() => {
    if (crimes) {
      setCrimeEntries(crimes);
    }
  }, [crimes]);

  const [deleteCrimeMutation] = useDeleteCrimeMutation();

  const handleDeleteCrime = async (CrimeID) => {
    try {
      await deleteCrimeMutation(CrimeID);

      setCrimeEntries(crimeEntries.filter(entry => entry.CrimeID !== CrimeID));

      SuccessToast(`Crime entry with tracking number ${CrimeID} deleted successfully`)

    } catch (error) {

      console.error('Error deleting crime:', error);
    }
  };

  if (isLoading)
  {

    return <div> <BeatLoader /> </div>;
  }
  if (isError) return <div style={{color:'#fff'}}>Error fetching crime entries.</div>;

  const handleEditIsClicked = (CrimeID) => {
    SuccessToast(`Edit a crime entry ${CrimeID} toggled`)
  }

  return (
    <div className="crimeReports">
      <ul className='crimeAllReportsUList'>
        <li className='crimeAllReportsHeader'>
          <div className='AllReportEntry'>
            <span>Reference Number:</span>
          </div>
          <div className='AllReportEntry'>
            <span>Crime Category: </span>
          </div>
          <div className='AllReportEntry'>
            <span>Crime Date: </span>
          </div>
          <div className='AllReportEntry'>
            <span>Involved Individuals or Organizations: </span>
          </div>
          <div className='AllReportEntry'>
            <span>Description: </span>
          </div>
          <div className='AllReportEntry'>
            <span>Anonimity: </span>
          </div>
          <div className='AllReportEntry'>
            <span>More</span>
          </div>
        </li>
        
        {crimeEntries.map((entry, index) => (
          <li key={index} className='crimeAllReportsList'>
            <div className='AllReportEntries'>
              <span>{entry.CrimeID}</span>
            </div>
            <div className='AllReportEntries'>
              <span>{entry.CrimeCategory}</span>
            </div>
            <div className='AllReportEntries'>
              <span>{entry.CrimeDate}</span>
              <span>{entry.CrimeTime}</span>
            </div>
            <div className='AllReportEntries'>
              <span>{entry.Involved_parties}</span>
            </div>
            <div className='AllReportEntries'>
              <span>{entry.Comment}</span>
            </div>
            <div className='AllReportEntries'>
              <span>{entry.Anonimity}</span>
            </div>
            <div className='AllReportEntries'>
              <button className='deleteButton' onClick={() => handleDeleteCrime(entry.CrimeID)}><MdDelete /></button>
              <button className='deleteButton' onClick={() => handleEditIsClicked(entry.CrimeID)}><FaEdit /></button>
            </div>
          </li>
        ))}
      </ul>
      <ToasterContainer />
    </div>
  );
};

export default CrimeReports;
