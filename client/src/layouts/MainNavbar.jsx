import React, { useState, useEffect } from 'react';
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { SuccessToast } from '../components/toaster/Toaster';
import { useGetUserByIdQuery } from '../features/UserApi.js';

const MainNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).UserID : null;
  
  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);

  useEffect(() => {
    setIsLoggedIn(!!userId);
  }, [userId]);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    SuccessToast('You have logged out successfully');
  };

  const guestItems = [
    { name: "Home", path: "/" },
    { name: "How it works", path: "/howItWorks" },
    { name: "Contact Us", path: "/contactUs" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Login", path: "/login" }
  ];

  const userItems = [
    { name: "Dashboard", path: "/mainPage" },
    { name: "Track Crime", path: "/trackCrime" },
    { name: <FaRegUser style={{width:"30px", height:"30px"}}/>, path: "/profile" },
    { name: <TbLogout onClick={handleLogout} style={{width:"30px", height:"30px"}}/>, path: "/" }
  ];

  const adminItems = [
    { name: "Home", path: "/admin/adminDashboard" },
    { name: "Crime Status", path: "/admin/status" },
    { name: "Categories", icon: "", path: "/admin/categories" },
    { name: <FaRegUser style={{width:"30px", height:"30px"}}/>, path: "/admin/profile" },
    { name: <TbLogout onClick={handleLogout} style={{width:"30px", height:"30px"}}/>, path: "/" }
  ];

  const items = isLoggedIn ?
    (userData && userData.User_rank === 'User' ? userItems : adminItems) :
    guestItems;

  const handleItemClick = (path, name) => {
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarContainerHeader'>
        <h1>Online Reporting System</h1>
      </div>
      <div className='navbarContainerMenu'>
        {items.map((item, index) => (
          <div key={index} className="menu-item" onClick={() => handleItemClick(item.path, item.name)}>
            <NavLink style={{ textDecoration: "none" }} to={item.path}>
              <p style={{ textDecoration: "none", color:"#fff", fontWeight:"bold" }}>{item.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNavbar;
