import React, { useEffect, useState } from 'react';
import './CrimeReportsList.scss';
import { FaChevronRight } from 'react-icons/fa';
import { useUpdateCrimeStatusMutation, useDeleteCrimeMutation, useGetCrimesQuery } from '../../features/CrimeApi';
import { ToasterContainer, ErrorToast, SuccessToast } from '../toaster/Toaster';
import BeatLoader from 'react-spinners/BeatLoader'

const CrimeReports = () => {
  const { data: crimeEntries, error, isLoading, refetch } = useGetCrimesQuery();
  const [deleteCrimeMutation] = useDeleteCrimeMutation();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedEntryId, setSelectedEntryId] = useState('');
  const [updateCrimeStatusMutation] = useUpdateCrimeStatusMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleDelete = async (crimeID) => {
    try {
      await deleteCrimeMutation(crimeID);
      SuccessToast(`Crime entry ${crimeID} deleted successfully`)
      refetch();
    } catch (error) {
      console.error('Error deleting crime:', error);
    }
  };

  const handleUpdate = async (crimeID) => {
    try {
      const updateCrime = {
        CrimeID: crimeID,
        CrimeStatus: selectedStatus,
      };

      await updateCrimeStatusMutation(updateCrime);

      SuccessToast(`Crime status updated successfully to : ${selectedStatus}`)

      refetch();
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  if (isLoading) {
    return <div><BeatLoader /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="crimeReports">
      <ul className="crimeAllReportsUList">
        {crimeEntries.map((entry, index) => (
          <li key={index} className="crimeAllReportsList">
          <div className='crimeAllReportsUListContainer'>
              <div className='crimedatacontainer'>
                
            <div className="crimeAllReportEntry">
              <span className="crimeAllReportEntryHeader">Reference Number:</span>
              <span>{entry.CrimeID}</span>
            </div>
            <div className="crimeAllReportEntry">
              <span className="crimeAllReportEntryHeader">Crime Type: </span>
              <span>{entry.CrimeCategory}</span>
            </div>
            <div className="crimeAllReportEntry">
              <span className="crimeAllReportEntryHeader">Date: </span>
              <span>{entry.CrimeDate}</span>
              <span>{entry.CrimeTime}</span>
            </div>
            <div className="crimeAllReportEntry">
              <span className="crimeAllReportEntryHeader">Involved Parties: </span>
              <span>{entry.Involved_parties}</span>
            </div>
            <div className="crimeAllReportEntry">
              <span className="crimeAllReportEntryHeader">CrimeStatus: </span>
              <span>{entry.CrimeStatus}</span>
            </div>
            <div className="crimeAllReportEntry">
              <span className="crimeAllReportEntryHeader">Anonimity:</span>
              <span className="crimeAllReportEntryBtn">{entry.Anonimity}</span>
            </div>
            </div>
            <div className="actionsTab">
              <button onClick={() => handleDelete(entry.CrimeID)}>Delete</button>

              <div className='actionsTabInput'>
                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Reported to the police">Reported to the police</option>
                  <option value="Matter forwarded to the EACC">Matter forwarded to the EACC</option>
                  <option value="Conflicted parties contacted">Conflicted parties contacted</option>
                </select>
                <button onClick={() => handleUpdate(entry.CrimeID)}>Update</button>
              </div>
            </div>
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrimeReports;
