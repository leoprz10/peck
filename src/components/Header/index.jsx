import React from 'react';
import './header.css'
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Redes } from '../Redes';

const Header = () => {
    return(
        <div className='contHeader'>
            <Logo/>
            <Navbar/>
            <Redes/>
        </div>
    )
}

export { Header }