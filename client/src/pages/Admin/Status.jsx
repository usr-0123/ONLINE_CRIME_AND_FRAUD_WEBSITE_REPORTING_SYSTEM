import React from 'react';

import { FaChevronRight } from "react-icons/fa";

import './Status.scss'

const Status = () => {
  const crimeEntries = [
    {
        Email:"dkfsd@example.com",
        referenceNumber:"8244tfdewgy",
        crimeType: "Cybercrime",
        date: "01-01-2023",
        time: "09:32 AM",
        involvedIndividuals: "Khalif Kairo",
        involvedOrganizations: "Kai & Karo company",
        evidence: "The car company",
        progress:"Ongoing"
    },
    {
        Email:"jskfd@example.com",
        referenceNumber:"824623ewgy",
        crimeType: "CyberBullying",
        date: "30-01-2024",
        time: "11:32 PM",
        involvedIndividuals: "Kabarak University Management",
        involvedOrganizations: "Kabarak University",
        evidence: "Campus",
        progress:"Settled"
    }
]

  return (
    <div className='Status'>
      <ul className='StatusList'>
        <div className='StatusHeader'>
          <div className='statusEntry'>
            <span>Reporter</span>
          </div>
          <div className='statusEntry'>
              <span>Ref Number</span>
          </div>
          <div className='statusEntry'>
              <span>Date/Time</span>
          </div>
          <div className='statusEntry'>
              <span>Progress</span>
          </div>
          <div className='statusEntry'>
            <span className='statusEntryBtn'>Actions</span>
          </div>
        </div>
        {crimeEntries.map((entry, index) => (
          <li key={index} className='StatusListEntries'>
            <div className='statusEntry'>
              <span>{entry.Email}</span>
            </div>
            <div className='statusEntry'>
              <span>{entry.referenceNumber}</span>
            </div>
            <div className='statusEntry'>
              <span>{entry.date} {entry.time}</span>
            </div>
            <div className='statusEntry'>
              <span>{entry.progress}</span>
            </div>
            <div className='statusEntry'>
              <span className='statusEntryBtn'><FaChevronRight /></span>              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Status;
