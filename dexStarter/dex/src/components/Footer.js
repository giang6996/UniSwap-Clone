import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/google'
import "./styles/Footer.css"
import "../App.css"

// Footer for every page, including link to social media, site's copyright info and link to site Identity page
function Footer() {
  return (
        <>

        {/* site social media */}
      <div className="footer container-fluid">
        <div className='d-flex justify-content-around align-items-center'>
          <div className='w-25 d-flex justify-content-around'>
            <a className='link' href=""><SocialIcon url="www.facebook.com" /></a>
            <a className='link' href=""><SocialIcon url="www.instagram.com" /></a>
            <a className='link' href=""><SocialIcon url="www.google.com" /></a>
          </div>

          {/* Copyright */}
          <div className='w-25 d-flex justify-content-around align-items-center'>
            <p className="my-0" id="text">By JebDev @2024</p>
          </div>

          {/* Link to site Identity page */}
          <div className='w-25 d-flex justify-content-evenly align-items-center'>
            <a className='link' href="#">Home</a>
            <a className='link' href="#">About us</a>
          </div>

        </div>
      </div>
        </>
  );
}

export default Footer