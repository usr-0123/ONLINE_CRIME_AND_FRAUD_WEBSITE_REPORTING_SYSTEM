// import './Profile.scss'

// import { FaRegUser } from "react-icons/fa";
// import { RiEdit2Fill } from "react-icons/ri";

// const Profile = () => {
//     return (
//         <div className="profile">
//             <div className='profileContainer'>
//                 <div className='profileEdit'>
//                     <button><RiEdit2Fill style={{height:"20px",width:"20px"}}/> Edit</button>
//                 </div>
//                 <div className='profilePicture'>
//                     <FaRegUser style={{height:"100px" ,width:"100px"}}/>
//                 </div>
//                 <div className='profileNames'>
//                     <span>First Name</span>
//                     <span>Last Name</span>
//                 </div>
//                 <div className='profileEmail'>
//                     <span>Email Address</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile;

// import React from 'react';
// import { FaRegUser } from "react-icons/fa";
// import { RiEdit2Fill } from "react-icons/ri";
// import './Profile.scss';

// const Profile = () => {
//     // Retrieve user data from local storage
//     const userData = JSON.parse(localStorage.getItem('userData'));

//     // Check if user data exists in local storage
//     if (!userData) {
//         return (
//             <div className="profile">
//                 <p>No user data found!</p>
//             </div>
//         );
//     }

//     return (
//         <div className="profile">
//             <div className='profileContainer'>
//                 <div className='profileEdit'>
//                     <button><RiEdit2Fill style={{ height: "20px", width: "20px" }} /> Edit</button>
//                 </div>
//                 <div className='profilePicture'>
//                     <FaRegUser style={{ height: "100px", width: "100px" }} />
//                 </div>
//                 <div className='profileNames'>
//                     <span>First Name: {userData.First_name}</span>
//                     <span>Last Name: {userData.Last_name}</span>
//                 </div>
//                 <div className='profileEmail'>
//                     <span>Email Address: {userData.Email_address}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;

// import React, { useState } from 'react';
// import { FaRegUser } from "react-icons/fa";
// import { RiEdit2Fill } from "react-icons/ri";
// import './Profile.scss';

// const Profile = () => {
//     // Retrieve user data from local storage
//     const initialUserData = JSON.parse(localStorage.getItem('userData'));
//     const [userData, setUserData] = useState(initialUserData || {});

//     const [editedFirstName, setEditedFirstName] = useState(userData.First_name || '');
//     const [editedLastName, setEditedLastName] = useState(userData.Last_name || '');
//     const [editedEmail, setEditedEmail] = useState(userData.Email_address || '');

//     const handleEdit = () => {
//         // Save edited details to user data
//         setUserData({
//             ...userData,
//             First_name: editedFirstName,
//             Last_name: editedLastName,
//             Email_address: editedEmail
//         });

//         // Save user data back to local storage
//         localStorage.setItem('userData', JSON.stringify(userData));
//     };

//     return (
//         <div className="profile">
//             <div className='profileContainer'>
//                 <div className='profileEdit'>
//                     <button onClick={handleEdit}><RiEdit2Fill style={{ height: "20px", width: "20px" }} /> Edit</button>
//                 </div>
//                 <div className='profilePicture'>
//                     <FaRegUser style={{ height: "100px", width: "100px" }} />
//                 </div>
//                 <div className='profileNames'>
//                     <input
//                         type="text"
//                         value={editedFirstName}
//                         onChange={(e) => setEditedFirstName(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         value={editedLastName}
//                         onChange={(e) => setEditedLastName(e.target.value)}
//                     />
//                 </div>
//                 <div className='profileEmail'>
//                     <input
//                         type="email"
//                         value={editedEmail}
//                         onChange={(e) => setEditedEmail(e.target.value)}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;

import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import './Profile.scss';

const Profile = () => {
    // Retrieve user data from local storage
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
        // Save edited details to user data
        setUserData({
            ...userData,
            First_name: editedFirstName,
            Last_name: editedLastName,
            Email_address: editedEmail
        });

        // Save user data back to local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        setIsEditing(false);
    };

    const handleCancel = () => {
        // Reset edited values
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
