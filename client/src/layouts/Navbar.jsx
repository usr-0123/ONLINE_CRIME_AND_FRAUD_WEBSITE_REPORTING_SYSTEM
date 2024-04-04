// Import style file
import './Navbar.scss';

import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

// Import components
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import ToasterContainer
import { ToasterContainer, LoadingToast, SuccessToast, ErrorToast } from '../components/toaster/Toaster.jsx';

const Navbar = () => {

  const handleLogout = () => {

    // Clear user data from local storage
    localStorage.removeItem('userData');

    SuccessToast('You have logged out successfully')
  }

  const items = [
    {
      name: "Home",
      path: "/mainPage"
    },
    {
      name: "Track Crime",
      path: "/trackCrime"
    },
    {
      name: <FaRegUser style={{width:"30px", height:"30px"}}/>,
      path: "/profile"
    },
    {
      name: <TbLogout onClick={handleLogout} style={{width:"30px", height:"30px"}}/>,
      icon:"",
      path: "/"
    },
  ];

  const handleItemClick = (path, name) => {
    
    // Handle item click logic here if needed
    // console.log("Clicked on", path);

    // SuccessToast(`You navigated to ${name} page`)
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarContainerHeader'></div>
      <div className='navbarContainerMenu'>
        {items.map((item) => (
          <div key={item.path} className="menu-item" onClick={() => handleItemClick(item.path, item.name)}>
            <NavLink style={{ textDecoration: "none" }} to={item.path}>
             <p style={{ textDecoration: "none", color:"#fff", fontWeight:"1000" }}>{item.name}</p>
           </NavLink>
         </div>
        ))}
     </div>
    </div>
  );
};

export default Navbar;
