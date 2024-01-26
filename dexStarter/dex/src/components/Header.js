import React from 'react';
import Eth from '../eth.svg';
import Logo from '../Logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isStorePage = location.pathname === '/store';

  return (
    <header>
      <div className="leftH">
        <img src={Logo} className="logo" alt="logo" />

        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Token </div>
        </Link>
        <Link to="/store" className="link">
          <div className="headerItem">Store </div>
        </Link>
        
      </div>

      <div className="rightH">
        {isStorePage && (
            <div className="search-bar">
              <input type="text" id="search-bar-input" placeholder="Search..." />
            </div>
          )}
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Etherium
        </div>
        <div className="connectButton">Connect</div>
      </div>
    </header>
  );
}

export default Header;
