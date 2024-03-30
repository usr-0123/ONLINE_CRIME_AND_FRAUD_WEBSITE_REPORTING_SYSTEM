import React from 'react';

import './CrimeCategories.scss'

const CrimeCategories = () => {

    const crimeEntries = [
        {
            referenceNumber:"8244tfdewgy",
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
    const crimeCategories = [
        {
            name: "Cybercrime",
            reports: "8244tfdewgy",
            status: "Reported to police"
        },
        {
            name: "CyberBullying",
            reports: "824623ewgy",
            status: "Completed and solved"
        }
    ]

  return (
    <div className="crimeCategories">
        <ul className='crimeCategoriesUList'>
          {crimeCategories.map((entry, index) => (
            <li key={index} className='crimeCategoriesList'>
                <div className='crimeCategoriesEntry'>
                    <span className='crimeCategoriesEntryHeader'>Reference Number:</span>
                    <span>{entry.name}</span>
                </div>
                <div className='crimeCategoriesEntry'>
                    <span className='crimeCategoriesEntryHeader'>Crime Type: </span>
                    <span>{entry.reports}</span>
                </div>
                <div className='crimeCategoriesEntry'>
                    <span className='crimeCategoriesEntryHeader'>Status: </span>
                    <span>{entry.status}</span>
                </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default CrimeCategories;
