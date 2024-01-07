import React from 'react';
import { Hero } from '../Hero';
import { Proyectos } from '../Proyectos';
import { Servicios } from '../Servicios';
import { Nosotros } from '../Nosotros';
const Main = () => {
    return(
        <div>
            <Hero/>
            <Servicios/>
            <Proyectos/>
            <Nosotros/>

        </div>
    )
}

export { Main }