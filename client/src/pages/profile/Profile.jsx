import './Profile.scss'

import { FaRegUser } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

const Profile = () => {
    return (
        <div className="profile">
            <div className='profileContainer'>
                <div className='profileEdit'>
                    <button><RiEdit2Fill style={{height:"20px",width:"20px"}}/> Edit</button>
                </div>
                <div className='profilePicture'>
                    <FaRegUser style={{height:"100px" ,width:"100px"}}/>
                </div>
                <div className='profileNames'>
                    <span>First Name</span>
                    <span>Last Name</span>
                </div>
                <div className='profileEmail'>
                    <span>Email Address</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;