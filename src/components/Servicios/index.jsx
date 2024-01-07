import React from 'react';
import './servicios.css';
import fondo from '../../assets/Fondo.png'
import { motion } from 'framer-motion'
import { Prueba } from '../Prueba'
const Servicios = () => {
    return(
        <div className='contServ'>
            <h1>SERVICIOS</h1>
            <p className='texto'>Nuestra área de desarrollo cubre fundamentalmente proyectos estructurales de Ingeniería Civil. Partiendo del análisis integral y pormenorizado de cada caso, tanto a nivel conceptual como a nivel de detalle ejecutivo, buscamos ofrecer la mejor solución al cliente atendiendo la funcionalidad del proyecto.</p>
            <Prueba/>
            <div className='servi'>
                <div className='serv'>
                    <h2 className='subti'>ANTEPROYECTOS</h2>
                    <ul className='lista'>
                        <li>Estudio de alternativas.</li>
                        <li>Estimación de costos.</li>
                        <li>Ingeniería conceptual.</li>
                        <li>Memorias técnicas.</li>
                    </ul>
                </div>
                <div className='serv'>
                    <h2 className='subti'>PROYECTOS</h2>
                    <ul className='lista'>
                        <li>Evaluación preliminar.</li>
                        <li>Factibilidad técnica y económica.</li>
                        <li>Documentación licitatoria.</li>
                        <li>Especificaciones técnicas.</li>
                        <li>Ingeniería básica.</li>
                        <li>Ingeniería de detalle.</li>
                        <li>Producción de planos.</li>
                    </ul>
                </div>
                <div className='serv'>
                    <h2 className='subti'>DISEÑO, CÁLCULO Y VERIFICACIONES</h2>
                    <ul className='lista'>
                        <li>Edificaciones en H° A°.</li>
                        <li>Edificaciones en Acero.</li>
                        <li>Estructuras mixtas.</li>
                        <li>Naves industriales.</li>
                        <li>Elementos especiales de H° A° y acero con aplicación de MEF.</li>
                        <li>Conexiones.</li>
                        <li>Fundaciones superficiales y profundas.</li>
                    </ul>
                </div>
                <div className='serv'>
                    <h2 className='subti'>DIRECCIÓN E INSPECCIÓN</h2>
                    <ul className='lista'>
                        <li>Acompañamiento y asesoramiento.</li>
                        <li>Estudio de licitaciones.</li>
                        <li>Planificación y programación.</li>
                        <li>Seguimiento y control de procesos.</li>
                        <li>Supervición e inspección de obra.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Servicios }