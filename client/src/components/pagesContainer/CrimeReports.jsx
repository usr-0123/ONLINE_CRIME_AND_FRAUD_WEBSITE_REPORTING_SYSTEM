import React from 'react';

import './CrimeReports.scss'

const CrimeReports = () => {

    const crimeEntries = [
        {
            referenceNumber:"824623ewgy",
            crimeType: "Cybercrime",
            date: "01-01-2023",
            time: "09:32 AM",
            involvedIndividuals: "Khalif Kairo",
            involvedOrganizations: "Kai & Karo company",
            evidence: "The car company"
        },
        {
            referenceNumber:"gdfghfd",
            crimeType: "CyberBullying",
            date: "01-01-2023",
            time: "09:32 AM",
            involvedIndividuals: "Kabarak University Management",
            involvedOrganizations: "Kabarak University",
            evidence: "Campus"
        },
        {
            referenceNumber:"cgdfgdfgf",
            crimeType: "Online Fraud",
            date: "23-06-2022",
            time: "02:32 PM",
            involvedIndividuals: "Nakuru County",
            involvedOrganizations: "Gov't Office",
            evidence: "County"
        }
    ]

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
          {crimeEntries.map((entry, index) => (
            <li key={index} className='crimeAllReportsList'>
                <div className='AllReportEntry'>
                    <span>{entry.referenceNumber}</span>
                </div>
                <div className='AllReportEntry'>
                    <span>{entry.crimeType}</span>
                </div>
                <div className='AllReportEntry'>
                    <span>{entry.date} {entry.time}</span>
                </div>
                <div className='AllReportEntry'>
                    <span>{entry.involvedIndividuals}</span>
                </div>
                <div className='AllReportEntry'>
                    <span>{entry.involvedOrganizations}</span>
                </div>
                <div className='AllReportEntry'>
                    <span>{entry.evidence}</span>
                </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default CrimeReports;
