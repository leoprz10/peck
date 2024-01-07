import React from 'react';
import './hero.css'
import fondo from '../../assets/Fondo.png'
import peck from '../../assets/2.png'
import { motion } from 'framer-motion'

const Hero = () => {
  
    return( 
        <div className='contHero'>
            <div className='contTitulo'>
                <img src={peck} alt="" className='img2'/> 
                <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                 className='titulo'>ESTUDIO DE INGENIERÍA CIVIL</motion.h1>
            </div>
            <div className='max'>
                <motion.h2
                 initial={{ opacity: 0}}
                 animate={{ opacity: 1}}
                 transition={{ duration: 5 }}
                >Máxima atención a los detalles, desde el boceto a la construcción final.</motion.h2>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 6 }}
                ><strong><i class="bi bi-geo-alt"></i>Santa Fe, Argentina. </strong></motion.p>
            </div>
            
        </div>
    )
}

export { Hero }