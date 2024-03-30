import React from 'react';

import './CrimeReportsList.scss'

import { FaChevronRight } from "react-icons/fa";

const CrimeReports = () => {
    const crimeEntries = [
        {
            referenceNumber:"824623ewgy",
            crimeType: "Cybercrime",
            date: "01-01-2023",
            time: "09:32 AM",
            involvedIndividuals: "Khalif Kairo",
            involvedOrganizations: "Kai & Karo company",
            evidence: "The car company",
            action: <FaChevronRight />
        },
        {
            referenceNumber:"dfhgjyuk",
            crimeType: "CyberBullying",
            date: "01-01-2023",
            time: "09:32 AM",
            involvedIndividuals: "Kabarak University Management",
            involvedOrganizations: "Kabarak University",
            evidence: "Campus",
            action: <FaChevronRight />
        },
        {
            referenceNumber:"errgdfh",
            crimeType: "Online Fraud",
            date: "01-01-2023",
            time: "09:32 AM",
            involvedIndividuals: "General Manager",
            involvedOrganizations: "Cocacola company",
            evidence: "Company",
            action: <FaChevronRight />
        }
    ]

  return (
    <div className="crimeReports">
        <ul className='crimeAllReportsUList'>
            {crimeEntries.map((entry, index) => (
            <li key={index} className='crimeAllReportsList'>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Reference Number:</span>
                    <span>{entry.referenceNumber}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Crime Type: </span>
                    <span>{entry.crimeType}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Date: </span>
                    <span>{entry.date}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Time: </span>
                    <span>{entry.time}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Involved Individuals: </span>
                    <span>{entry.involvedIndividuals}</span>
                </div>
                <div className='crimeAllReportEntry'>
                    <span className='crimeAllReportEntryHeader'>Involved Organizations: </span>
                    <span>{entry.involvedOrganizations}</span>
                </div>
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
