// Import style file
import './Navbar.scss';

// Import components
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
