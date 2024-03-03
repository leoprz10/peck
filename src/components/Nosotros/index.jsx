import React from 'react';
import './nosotros.css';
import estructura from '../../assets/5.jpeg'
import { Equipo } from '../Equipo';
const Nosotros = () => {
    return(
        <div className='contNosotros'>
            <div >
                <h2 className='textoFondo'>PECK</h2>
                <h1> ACERCA DE LA EMPRESA</h1>
                <div className='quenosdes'>
                    <div>
                        <p className='texto2'> <strong>PECK INGENIERIA</strong> es una firma Consultora de la ciudad de Santa Fe, Argentina, establecida en 2020 y dedicada al Diseño, Cálculo e Inspección de Obras Civiles y Estructurales. </p>
                        <p className='texto'>El Estudio, tiene una fuerte especialización en Diseño y Cálculo de Proyectos Estructurales, lo que nos permite ofrecer un amplio abanico de alternativas y soluciones a las problemáticas en el sector.</p>
                    </div>
                    
                    <img className='estruc' src={estructura} alt="" />
                </div>
                 
            </div>

            <h1>NUESTRO EQUIPO</h1>
            <p >Contamos con la participación de un equipo competitivo de profesionales especializados en las distintas áreas relacionadas con las actividades de la ingeniería y construcción, permitiéndonos ofrecer servicios de ingeniería para el desarrollo de cualquier proyecto de distinta emvergadura.</p>
            <Equipo/>
        </div>
        
    )
}

export { Nosotros }