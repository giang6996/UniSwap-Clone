import React, {useState} from 'react';
import './styles/LogRes.css';
import email_icon from '../email.png';
import password_icon from '../password.png';
import user_icon from '../person.png';


function LogRes(){

    const [action, setAction] = useState("Sign Up");

    return(
        <div className='container-log'> 
            <div className='header-log'>
                <div className='text'>{action}</div>
                <div className='underline' ></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Enter Username'/>
            </div>}


            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Enter Email'/>
            </div>    
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Enter Password'/>
            </div>        
            </div>

            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
  
  }

export default LogRes;