import React from 'react';
import './proyectos.css'
import proy1 from '../../assets/1A.png'
import proy2 from '../../assets/2A.png'
import proy3 from '../../assets/3A.png'
import proy4 from '../../assets/4A.png'
const Proyectos = () => {
    return(
        <div className='contProy'>
            <h1>PROYECTOS</h1>
            <div className='proyec'>
                <img src={proy1} alt="" className='imgProy' />
                <img src={proy2} alt="" className='imgProy' />
                <img src={proy3} alt="" className='imgProy' />
                <img src={proy4} alt="" className='imgProy' />
            </div>
            
        </div>
    )
}

export { Proyectos }