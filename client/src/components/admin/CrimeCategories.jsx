import React, { useEffect } from 'react';
import './CrimeCategories.scss';
import { useGetCrimesQuery, useDeleteCrimeMutation } from '../../features/CrimeApi';

const CrimeCategories = () => {
    const { data: crimeEntries, isLoading, isError, refetch } = useGetCrimesQuery();
    const [deleteCrime] = useDeleteCrimeMutation();

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
      "Testing update",
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
            {crimes.filter(category => crimeEntries.some(entry => entry.CrimeCategory === category)).map((category, index) => (
                    <li key={index} className='crimeCategoriesList'>
                        <div className='crimeCategoriesEntry'>
                            <span className='crimeCategoriesEntryHeader'>{category}</span>
                        </div>
                        <div className='crimeCategoriesEntry'>
                            <ul className='crimeCategoriesEntries'>
                                <li className='crimeCategoriesEntriesList'>
                                    <div className='crimeCategoriesEntriesHeader'>
                                        <span>Ref Number</span>
                                        <span>Date</span>
                                        <span>Involved Parties</span>
                                        <span>Crime category</span>
                                        <span>Progress</span>
                                    </div>
                                </li>

                                {crimeEntries && crimeEntries
                                    .filter(entry => entry.CrimeCategory === category)
                                    .map((entry, entryIndex) => (
                                        <li key={entryIndex} className='crimeCategoriesEntriesList'>
                                            <div className='crimeCategoriesEntriesListEntries'>
                                                <span>{entry.CrimeID}</span>
                                                <span>{entry.CrimeDate}</span>
                                                <span>{entry.Involved_parties}</span>
                                                <span>{entry.CrimeCategory}</span>
                                                <span>{entry.CrimeStatus}</span>
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
