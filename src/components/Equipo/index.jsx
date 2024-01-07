import React from 'react';
import './equipo.css'
import Nico from '../../assets/Nico.png'
import Leo from '../../assets/Leo.png'
import Lucas from '../../assets/Lucas.png'
import Seba from '../../assets/Seba.png'

const Equipo = () => {
    return(
        <div className='contEquipo'>
            <div className='contCaract'>
                <img className='fotos' src={Nico} alt="" />
                <div className='nombre'>
                    <h3><strong>NICOLÁS ASCAINO</strong> </h3>
                    <p className='inge'> <strong>Ingeniero Civil</strong> </p>
                    <p><strong>Esp. en Ingeniería Estructural y Sismorresistente</strong> </p>
                    <p>Inesa Tech - Civil Engineering School & Consulting - Barcelona</p>
                    <p className='roles'><strong>ROLES:</strong> </p>
                    <ul>
                        <li>Gestión integrada de proyectos.</li>
                        <li>Documentación técnica y revisiones.</li>
                        <li>Modelado y análisis por Método de Elementos Finitos.</li>
                    </ul>
                </div>
            </div>
            <div className='contCaract'>
                <img className='fotos' src={Lucas} alt="" />
                <div className='nombre'>
                    <h3><strong>LUCAS PIGHÍN</strong> </h3>
                    <p className='inge'> <strong>Ingeniero Civil</strong> </p>
                    <p className='roles'><strong>ROLES:</strong> </p>
                    <ul>
                        <li>Diseño y cálculo de estructuras de H° A°.</li>
                        <li>Diseño y cálculo de estructuras especiales.</li>
                        <li>Verificaciones de capacidad estructural.</li>
                    </ul>
                </div>
            </div>
            <div className='contCaract'>
                <img className='fotos' src={Leo} alt="" />
                <div className='nombre'>
                    <h3><strong>LEONARDO PÉREZ</strong> </h3>
                    <p className='inge'> <strong>Estudiante Avanzado de Ingeniería Civil</strong> </p>
                    <p className='roles'><strong>ROLES:</strong> </p>
                    <ul>
                        <li>Diseño y cálculo de fundaciones.</li>
                        <li>Dibujante proyectista estructural.</li>
                        <li>Interoperabilidad BIM.</li>
                    </ul>
                </div>
            </div>
            <div className='contCaract'>
                <img className='fotos' src={Seba} alt="" />
                <div className='nombre'>
                    <h3><strong>SEBASTIÁN RODRIGUEZ</strong> </h3>
                    <p className='inge'> <strong>Ingeniero Civil</strong> </p>
                    <p className='roles'><strong>ROLES:</strong> </p>
                    <ul>
                        <li>Diseño y cálculo de estructuras de Acero.</li>
                        <li>Diseño y cálculo de conexiones.</li>
                        <li>Innovación y nuevas tecnologías.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Equipo }