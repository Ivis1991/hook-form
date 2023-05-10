import React from 'react';
import Typical from 'react-typical';
import './Profile.css';


export default function Profile (){
  
    return(
        <div className='profile-container'>
            
           <div className ='profile-parent'>
                 <div className ='profile-details'>
                      <div className ='profile-colz'>
                        <div className='profile-colz-icon'>
                           <a href="https://www.facebook.com/">
                           <i className="fa fa-facebook-square"></i>
                           </a>
                           <a href="https://www.google.com/">
                           <i className="fa fa-google-plus-square"></i>
                           </a>
                           <a href="https://github.com/Ivis1991/">
                           <i class='fa fa-github'></i>
                           </a>
                           <a href="linkedin.com/in/ivis-mariño-b3947a126">
                           <i class="fa fa-linkedin"></i>
                           </a>
                        </div>
                      </div>
               <div className="profile-details-name"></div>
               <span className='primary-text'>
                {" "}
                Hello. I'm <span className='highlighted-text'>Ivis</span>
               </span>
           </div>
           <div className='profile-details-role'>
               <span className='primary-text'>
                {" "}
                <h1>
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        'DevOps Engenieer', 
                       3000,
                        "IT Manager", 
                        3000,
                        
                    ]}
                    />
                </h1>
                <span className='profile-role-tagline'>
               More than 8 experience in network administration, wide knowledge in control application management in industries
               and articulated haulers diagnostic software from Volvo Construction Equipment.
                 </span>
               </span>
           </div>
           <div className='profile-options'>
            <button className='btn primary-btn'>
                {""}
                Contact Me{""}
            </button>
            <a href='CV.pdf'download="Ivis Marino.pdf">
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
           </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
     </div>
    )
}