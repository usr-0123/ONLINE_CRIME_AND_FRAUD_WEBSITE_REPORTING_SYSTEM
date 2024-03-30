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
                    <span className='crimeCategoriesEntryHeader'>{entry.name}</span>
                </div>
                <div className='crimeCategoriesEntry'>
                    <ul className='crimeCategoriesEntries'>
                        <div className='crimeCategoriesEntriesHeader'>
                                    <span>Ref Number</span>
                                    <span>Date</span>
                                    <span>Time</span>
                                    <span>Involved Individuals</span>
                                    <span>Involved Organizations</span>
                                    <span>Evidence</span>
                        </div>

                        {crimeEntries.map((entry, index) => (
                            <li key={index} className='crimeCategoriesEntriesList'>                                
                                <div className='crimeCategoriesEntriesListEntries'>
                                    <span>{entry.referenceNumber}</span>
                                    <span>{entry.date}</span>
                                    <span>{entry.time}</span>
                                    <span>{entry.involvedIndividuals}</span>
                                    <span>{entry.involvedOrganizations}</span>
                                    <span>{entry.evidence}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default CrimeCategories;
