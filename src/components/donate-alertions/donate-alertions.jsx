import React from 'react';
import "./donate-alertions.scss";
import { Link } from 'react-router-dom';

const DonateAlertions = () => {
  return (
    <div id='donate-alertion-container'>
        <p><Link to="#donate">Support us by <span>donating.</span></Link></p>
        <div className="donate-close-btn">
            <i className='bxr bxs-x bx-flip-horizontal donate-close-btn-icon' style={{color: "#fff"}}></i> 
        </div>
    </div>
  )
}

export default DonateAlertions