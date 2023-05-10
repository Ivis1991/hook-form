import React from "react";
import Profile from "./Profile"
import Footer from "./Footer/Footer";
import './Home.css';
import Topbar from './Topbar/Topbar';
import Formulario from './Formulario';

export default function Home(){
    return(
        <div className="home-container-general">
          <Topbar/>
        <div className="home-container">
             <Profile/>
             <Footer/>
        </div>
            <div>
                <h3 className="registerform">Register</h3>
                </div>
                <div className="texto">
            <Formulario/>
            </div>
        </div>
    );
}