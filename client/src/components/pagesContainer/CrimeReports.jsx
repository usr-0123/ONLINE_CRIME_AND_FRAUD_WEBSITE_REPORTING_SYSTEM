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
            referenceNumber:"824623ewgy",
            crimeType: "CyberBullying",
            date: "01-01-2023",
            time: "09:32 AM",
            involvedIndividuals: "Kabarak University Management",
            involvedOrganizations: "Kabarak University",
            evidence: "Campus"
        }
    ]

  return (
    <div className="crimeReports">
        <ul className='crimeAllReportsUList'>
          {crimeEntries.map((entry, index) => (
            <li key={index} className='crimeAllReportsList'>
                <div className='crimeAllReportEntry'>
                    <span>Reference Number:</span>
                    <span>{entry.referenceNumber}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span>Crime Type: </span>
                    <span>{entry.crimeType}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span>Date: </span>
                    <span>{entry.date}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span>Time: </span>
                    <span>{entry.time}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span>Involved Individuals: </span>
                    <span>{entry.involvedIndividuals}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span>Involved Organizations: </span>
                    <span>{entry.involvedOrganizations}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span>Evidence: </span>
                    <span>{entry.evidence}</span>
                </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default CrimeReports;
