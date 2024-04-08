import React, { useEffect, useState } from 'react';
import './CrimeReportsList.scss';
import { IoSend } from 'react-icons/io5';
import { useUpdateCrimeStatusMutation, useDeleteCrimeMutation, useGetCrimesQuery, useReplyMutation } from '../../features/CrimeApi';
import { ErrorToast, SuccessToast } from '../toaster/Toaster';
import BeatLoader from 'react-spinners/BeatLoader';

const CrimeReports = () => {
  const { data: crimeEntries, error, isLoading, refetch } = useGetCrimesQuery();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [replyText, setReplyText] = useState('');
  const [updateCrimeStatusMutation] = useUpdateCrimeStatusMutation();
  const [deleteCrimeMutation] = useDeleteCrimeMutation();
  const [replyMutation] = useReplyMutation();

  const handleDelete = async (crimeID) => {
    try {
      await deleteCrimeMutation(crimeID);
      SuccessToast(`Crime entry ${crimeID} deleted successfully`);
      refetch();
    } catch (error) {
      ErrorToast('There was an error deleting the crime');
      console.error('Error deleting crime:', error);
    }
  };

  const handleUpdate = async (crimeID) => {
    try {
      await updateCrimeStatusMutation({ CrimeID: crimeID, CrimeStatus: selectedStatus });
      SuccessToast(`Crime status updated successfully to: ${selectedStatus}`);
      refetch();
    } catch (error) {
      ErrorToast('There was an error updating the crime status');
      console.error('Error updating entry:', error);
    }
  };

  const handleReply = async (crimeID) => {
    try {
      await replyMutation({ CrimeID: crimeID, Reply: replyText });
      SuccessToast('Reply added successfully');
      setReplyText('');
      refetch();
    } catch (error) {
      ErrorToast('There was an error adding reply');
      console.error('Error adding reply:', error);
    }
  };

  if (isLoading) {
    return <BeatLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
        <div className="crimeReports">
          <ul className="crimeAllReportsUList">
            {crimeEntries.map((entry) => (
              <li key={entry.CrimeID} className="crimeAllReportsList">
                <div className="crimeAllReportsUListContainer">
                  <div className="crimedatacontainer">
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Reference Number:</span>
                      <span>{entry.CrimeID}</span>
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Crime Type:</span>
                      <span>{entry.CrimeCategory}</span>
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Date:</span>
                      <span>{entry.CrimeDate} {entry.CrimeTime}</span>
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Involved Parties:</span>
                      <span>{entry.Involved_parties}</span>
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Crime Status:</span>
                      <span>{entry.CrimeStatus}</span>
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Reply:</span>
                      {entry.Reply ? ( <span>{entry.Reply}</span> ) : ( <span>Not replied</span> )}
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Anonymity:</span>
                      {entry.Anonimity == "Anonimous" ? (
                          <span className="crimeAllReportEntryBtn" >{entry.Anonimity}</span>
                            ) : (
                          <span className="crimeAllReportEntryBtn">{entry.First_name} {entry.Last_name}</span>
                            )}
                    </div>
                    <div className="crimeAllReportEntry">
                      <span className="crimeAllReportEntryHeader">Evidence:</span>
                      {entry.FileUrl ? ( <img className="statusEntryBtn" style={{ height: '100px', width: '100px' }} src={entry.FileUrl} alt="" /> ) : (
                        <span>No evidence submitted</span>
                      )}
                    </div>
                  </div>
                  <div className="actionsTab">
                    <div className="actionsTabReply">
                      <input type="text" placeholder="Enter reply..." value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                      <IoSend style={{ fontSize: '25px' }} onClick={() => handleReply(entry.CrimeID)} />
                    </div>
                    <div className="actionsTabInput">
                      <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                        <option value="">Select progress...</option>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Reported to the police">Reported to the police</option>
                        <option value="Matter forwarded to the EACC">Matter forwarded to the EACC</option>
                        <option value="Conflicted parties contacted">Conflicted parties contacted</option>
                      </select>
                      <button onClick={() => handleUpdate(entry.CrimeID)}>Update</button>
                    </div>
                    <button onClick={() => handleDelete(entry.CrimeID)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default CrimeReports;
