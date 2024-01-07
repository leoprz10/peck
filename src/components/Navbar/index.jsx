import React from 'react';
import './navbar.css'
import logo from '../../assets/1.png'

const Navbar = () => {
    return(
        <div className='contMenu'>
            <a href="#"><img src={logo} alt="" /></a> 
           
           <nav>
               <a href="#">Inicio</a>
               <a href="#">Servicios</a>
               <a href="#">Proyectos</a>
               <a href="#">Nosotros</a>
               <a href="#">Contacto</a>
           </nav>

           <div className='contRedes'>
           <a href="https://www.instagram.com/peck.ingenieria/?hl=es-la" target="_blank"><i class="bi bi-instagram"></i></a>
           <a href="https://www.facebook.com/search/top?q=peck%20ingenier%C3%ADa" target="_blank"><i class="bi bi-facebook"></i></a>
           <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A90866352&keywords=peck%20ingenieria&origin=RICH_QUERY_SUGGESTION&position=0&searchId=ea853398-2ce7-4dfd-a812-94ed01ef801d&sid=48r&spellCorrectionEnabled=false" target="_blank"><i class="bi bi-linkedin"></i></a>
           </div>
        </div>
    )
}

export { Navbar }