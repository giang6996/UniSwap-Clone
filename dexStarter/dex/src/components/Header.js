import React, { useState, useEffect } from 'react';
import Logo from '../Logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isStorePage = location.pathname === '/store';

  // State for handling dropdown menu on small screens
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);


  // Function to handle screen size changes
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  // Effect to add and remove event listener for resize
  useEffect(() => {
    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  // Function to hide dropdown menu
  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="leftH">
        {!isSmallScreen && (
          <img src={Logo} className="logo" alt="logo" />
        )}

        {/* Toggle button for small screens */}
        <button className="toggle-button" onClick={() => setShowDropdown(!showDropdown)}>
          ☰
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${showDropdown && isSmallScreen ? 'active' : ''}`}>
          <Link to="/" className="link" onClick={hideDropdown}>
            <div className="headerItem">Home</div>
          </Link>
          <Link to="/store" className="link" onClick={hideDropdown}>
            <div className="headerItem">Store </div>
          </Link>
          <Link to="/profile" className="link" onClick={hideDropdown}>
            <div className="headerItem">Profile </div>
          </Link>
        </div>

      </div>

      <div className="rightH">
        {isStorePage && (
          <div className="search-bar">
            <input type="text" id="search-bar-input" placeholder="Search..." />
          </div>
        )}
        <Link to="/cart" className="link" onClick={hideDropdown}>
            <div className="headerItem">Cart </div>
          </Link>
        <div className="connectButton">Connect</div>
        
      </div>
    </nav>
  );
}

export default Header;
