import React from 'react'
import './Footer.css'

export default function Footer(){
    return(
        <div className='footer-container'>
              <div className='footer-parent'>
                <img src={require ('../../../resources/Home/Frame-2.png')} 
                alt='no internet connection'
                />
            </div>
            
        </div>
    )
}