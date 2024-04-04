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

  // LoadingToast(false)
  
  const handleLogout = () => {

    // Clear user data from local storage
    localStorage.removeItem('userData');

    SuccessToast('You have logged out successfully')
  }

  const items = [
    {
      name: "Home",
      icon: "",
      path: "/admin/adminDashboard"
    },
    {
      name: "Crime Status",
      icon: "",
      path: "/admin/status"
    },
    {
      name: "Categories",
      icon: "",
      path: "/admin/categories"
    },
    {
      name: "About Us",
      icon: "",
      path: "/admin/aboutUs"
    },
    {
      name: <FaRegUser style={{width:"30px", height:"30px"}}/>,
      icon:"",
      path: "/admin/profile"
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

    // console.log(name);
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarContainerHeader'>
        <h1>Online Reporting System</h1>
      </div>
      <div className='navbarContainerMenu'>
        {items.map((item) => (
          <div key={item.path} className="menu-item" onClick={() => handleItemClick(item.path, item.name)}>
            <NavLink style={{ textDecoration: "none", color:"#fff", fontWeight:"1000" }} to={item.path}>
             <p>{item.name}</p>
           </NavLink>
         </div>
        ))}
     </div>
    </div>
  );
};

export default Navbar;
