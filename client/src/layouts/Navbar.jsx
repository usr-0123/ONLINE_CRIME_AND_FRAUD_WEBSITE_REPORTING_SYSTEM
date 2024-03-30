// Import style file
import './Navbar.scss';

import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

// Import components
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const items = [
    {
      name: "Home",
      path: "/mainPage"
    },
    {
      name: "How it works",
      path: "/howItWorks"
    },
    {
      name: "Contact Us",
      path: "/contactUs"
    },
    {
      name: "About Us",
      path: "/aboutUs"
    },
    {
      name: <FaRegUser style={{width:"30px", height:"30px"}}/>,
      path: "/profile"
    },
    {
      name: <TbLogout style={{width:"30px", height:"30px"}}/>,
      icon:"",
      path: "/"
    },
  ];

  const handleItemClick = (path) => {
    
    // Handle item click logic here if needed
    console.log("Clicked on", path);
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarContainerHeader'>
        <h1>Online Reporting System</h1>
      </div>
      <div className='navbarContainerMenu'>
        {items.map((item) => (
          <div key={item.path} className="menu-item" onClick={() => handleItemClick(item.path)}>
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
