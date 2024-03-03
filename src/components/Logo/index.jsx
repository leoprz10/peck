import React from 'react';
import './logo.css';
import logo from '../../assets/1.png';

const Logo = () => {
    return(
        <div className='cajaLogo'>
            <a href="#"><img className='logo' src={logo} alt="" /></a>
        </div>
    )
}

export { Logo }