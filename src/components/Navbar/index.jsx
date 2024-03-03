import React from 'react';
import './navbar.css'
import { Contacto } from '../../pages/Contacto'

const Navbar = () => {
    return(
        <div className='contMenu'>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Proyectos</a>
                    <a href="#">Nosotros</a>
                    <a href='#'>Contacto</a>
                </nav>
        </div>
    )
}

export { Navbar }