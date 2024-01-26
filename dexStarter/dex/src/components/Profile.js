import React from 'react';
import ava from '../ava.png';
import '../profile.css'; 


function Profile(){
    return (
    <div className='container'>
      <div className="leftdiv">
        <div className='img'>
          <img src={ava} alt="" className='ava-img' />
          <div className='name'>McGonagal</div>
          <div className="edit-btn">Edit</div>
        </div>
      </div>
      <div className='rightdiv'>

        </div>
    </div>
    );
  }

export default Profile;