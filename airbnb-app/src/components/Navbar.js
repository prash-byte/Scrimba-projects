import React from 'react';
import logo from '../images/airbnblogo.png';

export default function Navbar() {
    return(
        <nav className='nav'>
           <img className='mainlogo' src={logo} alt='airbnb_logo'/>
        </nav>
    )
}