import React, { useEffect } from 'react';

import './CrimeCategories.scss'

import { useGetCrimesQuery, useDeleteCrimeMutation } from '../../features/CrimeApi';

const CrimeCategories = () => {
    const { data: crimeEntries, isLoading, isError, refetch } = useGetCrimesQuery();
    const [deleteCrime] = useDeleteCrimeMutation();

    const crimeData = crimeEntries

    console.log("Logged crime entries:", crimeData);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await refetch();
        } catch (error) {
          console.error('Error fetching crime entries:', error);
        }
      };
  
      fetchData();
  
      // Cleanup function
      return () => {
        // Any cleanup logic if needed
      };
    }, [refetch]);
  
    const handleDeleteCrime = async (CrimeID) => {
      try {
        await deleteCrime(CrimeID);

      } catch (error) {
        console.error('Error deleting crime entry:', error);
      }
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching crime entries.</div>;

    const crimes = [
        "Phishing",
        "Identity Theft",
        "Credit Card Fraud",
        "Online Scams",
        "Malware Attacks",
        "Cyberbullying",
        "Cyberstalking",
        "Data Breaches",
        "Online Extortion",
        "Online Child Exploitation",
        "Hacking",
        "Fraudulent Investment Schemes",
        "Fake Websites and Phony Offers",
        "Social Engineering",
        "Online Auction Fraud"
    ];

  return (
    <div className="crimeCategories">
        <ul className='crimeCategoriesUList'>
          {crimes.map((entry, index) => (
            <li key={index} className='crimeCategoriesList'>
                <div className='crimeCategoriesEntry'>
                    <span className='crimeCategoriesEntryHeader'>{entry}</span>
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

                        {crimeEntries && crimeEntries.map((entry, index) => (
                            <li key={index.id} className='crimeCategoriesEntriesList'>                                
                                <div className='crimeCategoriesEntriesListEntries'>
                                    <span>{entry.referenceNumber}</span>
                                    <span>{entry.date}</span>
                                    <span>{entry.time}</span>
                                    <span>{entry.involvedIndividuals}</span>
                                    <span>{entry.involvedOrganizations}</span>
                                    <span>{entry.evidence}</span>
                                    <span> <button onClick={() => handleDeleteCrime(entry.UserID)}>Delete</button> </span>
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
