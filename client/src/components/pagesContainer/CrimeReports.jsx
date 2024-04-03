import React, { useState, useEffect } from 'react';
import './CrimeReports.scss';
import { useDeleteCrimeMutation, useGetCrimeByUidQuery } from '../../features/CrimeApi';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

const CrimeReports = () => {
  // Retrieve UserID from local storage
  const UserID = JSON.parse(localStorage.getItem('userData')).UserID;

  // State variables
  const [showEditForm, setShowEditForm] = useState(false);
  const [crimeEntries, setCrimeEntries] = useState([]);

  // Fetch crime entries using the useGetCrimeByUidQuery hook
  const { data: crimes, isError, isLoading } = useGetCrimeByUidQuery(UserID, { refetchOnReconnect: true });

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
      toast.success('Crime entry deleted successfully')

      // Remove deleted entry from the state
      setCrimeEntries(crimeEntries.filter(entry => entry.CrimeID !== CrimeID));
    } catch (error) {
      console.error('Error deleting crime:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
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
    </div>
  );
};

export default CrimeReports;
