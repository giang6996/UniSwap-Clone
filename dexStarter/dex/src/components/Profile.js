import React from 'react';
import ava from '../ava.png';
import './styles/profile.css';


function Profile(){
    return (
    <div className='container'>
        <div className="bg-white rounded py-5 leftdiv">
        <div className='img'>
          <img src={ava} alt="" className='ava-img' />
          <div className='name'>McGonagal</div>
          <div className="edit-btn">Edit</div>
        </div>
      </div>
        <div className=' bg-white rounded py-5 rightdiv'>

      </div>
    </div>
    );
  }

export default Profile;