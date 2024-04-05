import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import './Profile.scss';

const Profile = () => {
    const initialUserData = JSON.parse(localStorage.getItem('userData'));
    const [userData, setUserData] = useState(initialUserData || {});

    const [editedFirstName, setEditedFirstName] = useState(userData.First_name || '');
    const [editedLastName, setEditedLastName] = useState(userData.Last_name || '');
    const [editedEmail, setEditedEmail] = useState(userData.Email_address || '');
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setUserData({
            ...userData,
            First_name: editedFirstName,
            Last_name: editedLastName,
            Email_address: editedEmail
        });

        localStorage.setItem('userData', JSON.stringify(userData));

        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedFirstName(userData.First_name);
        setEditedLastName(userData.Last_name);
        setEditedEmail(userData.Email_address);

        setIsEditing(false);
    };

    return (
        <div className="profile">
            <div className='profileContainer'>
                <div className='profileEdit'>
                    {!isEditing ? (
                        <button onClick={handleEdit}><RiEdit2Fill style={{ height: "20px", width: "20px" }} /> Edit</button>
                    ) : (
                        <>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </>
                    )}
                </div>
                <div className='profilePicture'>
                    <FaRegUser style={{ height: "100px", width: "100px" }} />
                </div>
                {!isEditing ? (
                    <>
                        <div className='profileNames'>
                            <span>{userData.First_name}</span>
                            <span>{userData.Last_name}</span>
                        </div>
                        <div className='profileEmail'>
                            <span>{userData.Email_address}</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='profileNames'>
                            <input
                                type="text"
                                value={editedFirstName}
                                onChange={(e) => setEditedFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                value={editedLastName}
                                onChange={(e) => setEditedLastName(e.target.value)}
                            />
                        </div>
                        <div className='profileEmail'>
                            <input
                                type="email"
                                value={editedEmail}
                                onChange={(e) => setEditedEmail(e.target.value)}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Profile;
