import React from 'react';
import './nosotros.css';
import estructura from '../../assets/5.png'
import { Equipo } from '../Equipo';
const Nosotros = () => {
    return(
        <div className='contNosotros'>
            
            <h2> ACERCA DE LA EMPRESA<hr /></h2>
            <p><strong>PECK INGENIERIA</strong> es una firma Consultora de la ciudad de Santa Fe, Argentina, establecida en 2020 y dedicada al Diseño, Cálculo e Inspección de Obras Civiles y Estructurales.</p>
            <p>El Estudio, tiene una fuerte especialización en Diseño y Cálculo de Proyectos Estructurales, lo que nos permite ofrecer un amplio abanico de alternativas y soluciones a las problemáticas en el sector.</p>
            <h2>QUÉ NOS DESTACA<hr /></h2>
            <div className='quenosdes'>
                <div className='quenos'>
                    <p>Contamos con la participación de un equipo competitivo de profesionales especializados en las distintas áreas relacionadas con las actividades de la ingeniería y construcción, permitiéndonos ofrecer servicios de ingeniería para el desarrollo de cualquier proyecto de distinta emvergadura.</p>
                    <p>Nos mantenemos en la vanguardia tecnológica de la construcción haciendo uso de diversos sofware especializados que garantizan una ingeniería adecuada, tomando en cuenta el cumplimiento de los plazos, seguridad, calidad, eficiencia y seriedad que el cliente demanda.</p>
                </div>
                <img className='estruc' src={estructura} alt="" />
            </div>
            <h2>NUESTRO EQUIPO<hr /></h2>
            <Equipo/>
        </div>
        
    )
}

export { Nosotros }