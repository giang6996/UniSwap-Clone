import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/google'
import "./styles/Footer.css"
import "../App.css"

function Footer() {
  return (
        <>
      <div className="footer container-fluid">
        <div className='d-flex justify-content-around'>
          <div className='w-25 d-flex justify-content-around'>
            <a className='link' href=""><SocialIcon url="www.facebook.com" /></a>
            <a className='link' href=""><SocialIcon url="www.instagram.com" /></a>
            <a className='link' href=""><SocialIcon url="www.google.com" /></a>
          </div>
          <div className='w-25 d-flex justify-content-around'>
            <a className='link' href="#">Home</a>
            <a className='link' href="#">About us</a>
          </div>
        </div>
        <div >
          <p id="text">By JebDev @2024</p>
        </div>
      </div>
        </>
  );
}

export default Footer