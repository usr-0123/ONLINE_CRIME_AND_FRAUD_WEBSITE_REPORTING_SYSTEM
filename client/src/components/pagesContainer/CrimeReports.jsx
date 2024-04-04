import React, { useState, useEffect } from 'react';
import './CrimeReports.scss';
import { useDeleteCrimeMutation, useGetCrimeByUidQuery } from '../../features/CrimeApi';
import { MdDelete } from "react-icons/md";

// ToasterContainer
import { ToasterContainer, SuccessToast, ErrorToast, LoadingToast } from '../toaster/Toaster';

// Spinner
import BeatLoader from 'react-spinners/BeatLoader'

const CrimeReports = () => {
  // Retrieve UserID from local storage
  const UserID = JSON.parse(localStorage.getItem('userData')).UserID;

  // State variables
  const [showEditForm, setShowEditForm] = useState(false);
  const [crimeEntries, setCrimeEntries] = useState([]);

  // Fetch crime entries using the useGetCrimeByUidQuery hook
  const { data: crimes, isError, isLoading } = useGetCrimeByUidQuery(UserID, { refetchOnReconnect: true });

  // <BeatLoader color="#36d7b7" />
  // BeatLoader


  // Update state variable with fetched data
  useEffect(() => {
    if (crimes) {
      setCrimeEntries(crimes);
    }
  }, [crimes]);

  // Mutation for deleting a crime entry
  const [deleteCrimeMutation] = useDeleteCrimeMutation();

  // Function to handle deletion of a crime entry
  const handleDeleteCrime = async (CrimeID) => {
    try {
      // Execute deletion mutation
      await deleteCrimeMutation(CrimeID);

      // Toast notification after delete successful
      // Remove deleted entry from the state
      setCrimeEntries(crimeEntries.filter(entry => entry.CrimeID !== CrimeID));

      SuccessToast(`Crime entry with tracking number ${CrimeID} deleted successfully`)

    } catch (error) {

      console.error('Error deleting crime:', error);
    }
  };

  if (isLoading)
  {
    // LoadingToast(true)
    // ErrorToast('Fetching entries')

    return <div> <BeatLoader /> </div>;
  }
  if (isError) return <div>Error fetching crime entries.</div>;

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
              {/* <span className='editButton' onClick={handleEditClick}> <MdMoreHoriz /> </span> */}
            </div>
          </li>
        ))}
      </ul>
      {/* <div>
        {showEditForm && <CrimeEditForm />}
      </div> */}
      <ToasterContainer />
    </div>
  );
};

export default CrimeReports;
