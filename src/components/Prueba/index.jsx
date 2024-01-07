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
        <div>
        <Carousel>
            <Carousel.Item interval={5000}>
                <img className='imgCarousel' src={imagenPrueba} alt="" /> 
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img className='imgCarousel' src={imagenPrueba2}  alt=""  /> 
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgCarousel' src={imagenPrueba4} alt="" />
            </Carousel.Item>
    </Carousel>
        </div>
        
    )
}

export { Prueba }