import React, {useState} from 'react';
import ava from '../ava.png';
import './styles/profile.css';


function Profile(){

  const [content, setContent] = useState('message'); // Stores displayed content type ("message", "table", or "image")

  const handleClick = (type) => {
    setContent(type);
  };

  const renderContent = () => {
    switch (content) {
      case 'wallet':
        return (<table className='table table-dark table-striped table-bordered'>
          <tbody>
            <tr><th>Currency</th><th>Amount</th></tr>
            <tr><td>BTC </td><td>1.110 BTC</td></tr>
            <tr><td>DOGE </td><td>1.110 DOGE</td></tr>
            <tr><td>ETH</td><td>1.110 ETH</td></tr>
          </tbody>
        </table>);
      case 'history':
        return (
          <table className='table table-dark table-striped'>
            <tbody>
              <tr><th>Date</th><th>Amount</th></tr>
              <tr><td>12/08/2023 12:05:01 PM </td><td>0.001C</td></tr>
              <tr><td>12/08/2023 12:05:01 PM </td><td>0.001C</td></tr>
              <tr><td>12/08/2023 12:05:01 PM </td><td>0.001C</td></tr>
            </tbody>
          </table>
        );
      case 'collection':
        return <p>No collection found!</p>;
      default:
        return null;
    }
  }

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
          <div className=" d-flex justify-content-evenly profile-link">
            <a className='text-dark link-underline link-underline-opacity-0' href="#" onClick={() => handleClick('wallet')}>Wallet</a>
            <a className='text-dark link-underline link-underline-opacity-0' href="#" onClick={() => handleClick('history')}>History</a>
            <a className='text-dark link-underline link-underline-opacity-0' href="#" onClick={() => handleClick('collection')}>Collection</a>
          </div>
          <div className="pt-5 w-75 mx-auto profile-content">
            {renderContent()}
          </div>
      </div>
    </div>
    );
  }

export default Profile;