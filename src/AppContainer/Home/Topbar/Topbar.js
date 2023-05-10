import React from 'react';
import './Topbar.css';

export default function Topbar(){
    return(
        <div>
            <button className='primary-btn'> Home </button>

            <button className='second-btn'>Information</button>

            <button onclick="registerform" className='five-btn'>Register</button>
        
              <div className='topbar-parent'>
                <img src={require ('../../../resources/Home/Frame-6.png')} 
                alt='no internet connection'
                />
            </div>
    
        </div>
    )
}