import React from 'react';
import { useState } from 'react';
import './proyectos.css'
import proy1 from '../../assets/1A.png'
import proy2 from '../../assets/2A.png'
import proy3 from '../../assets/3A.png'
import proy4 from '../../assets/4A.png'

const Proyectos = () => {
    return(
      <div className='contProy'>
        <h1>Proyectos</h1>
        <div className='proyec'>
          <img className='imgProy' src={proy1} alt="" />
          <img className='imgProy' src={proy2} alt="" />
          <img className='imgProy' src={proy3} alt="" />
          <img className='imgProy' src={proy4} alt="" />
        </div>
      </div>
    )
  }
  
export { Proyectos }