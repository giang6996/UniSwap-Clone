import React from 'react'
import Eth from '../eth.svg'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <div class="leftH">
        <img src={Logo} className="logo" alt="logo" />

        {/* link to the item */}
        <Link to="/" className="link">
          <div className='headerItem'>Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className='headerItem'>Token </div>
        </Link>
      </div>

      <div class="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Etherium
        </div>
        <div className="connectButton" >
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header