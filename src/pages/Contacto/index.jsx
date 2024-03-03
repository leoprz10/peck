import React from 'react';

const Contacto = () => {
    return(
        <div className='contForm'>
            <form>
                <label >Ingrese su Nombre</label>
                <input type="text" placeholder='nombre' />
                <label >Ingrese su Email</label>
                <input type="text" placeholder='email' />
                <label >Ingrese su Consulta</label>
                <textarea placeholder='consulta'></textarea>
            </form>
        </div>
    )
}

export { Contacto }