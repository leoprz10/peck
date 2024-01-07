import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './prueba.css'
import imagenPrueba from '../../assets/come.png'
import imagenPrueba2 from '../../assets/cone.png'
import imagenPrueba3 from '../../assets/cone2.png'
import imagenPrueba4 from '../../assets/cone3.png'

function Prueba () {
    return(
        <div className='contenedor'>
            <div className='caja2'>
                <h2 className='textoFondo'>PECK</h2>
                <h1>SERVICIOS</h1>
                <p className='texto'>Nuestra área de desarrollo cubre fundamentalmente proyectos estructurales de Ingeniería Civil. Partiendo del análisis integral y pormenorizado de cada caso, tanto a nivel conceptual como a nivel de detalle ejecutivo, buscamos ofrecer la mejor solución al cliente atendiendo la funcionalidad del proyecto.</p>
            </div>   
            <div className='caja1'>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img className='imgCarousel' src={imagenPrueba} alt="" /> 
                        <h2 className='textoImg'>MODELADO EN ELEMENTOS FINITOS</h2>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className='imgCarousel' src={imagenPrueba2}  alt=""  />
                        <h2 className='textoImg'>MODELADO EN ELEMENTOS FINITOS</h2> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='imgCarousel' src={imagenPrueba4} alt="" />
                        <h2 className='textoImg'>MODELADO EN ELEMENTOS FINITOS</h2>
                    </Carousel.Item>
                </Carousel>
            </div> 
            
        
        </div>
        
    )
}

export { Prueba }