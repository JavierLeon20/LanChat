import Linea from '../Imagenes/Linea.png'
import Formulario from './Formulario'
import React from 'react'

const Registro = () => {
    return (
        <div>
            <img src={Linea} alt="Linea" id="LinNF"></img> 
            <input id='nick' type='text' value='Nombre usuario'></input>
            <Formulario></Formulario>
        </div>
    )
}

//Poner nickname como condicional en usuario
//Cambiar texto "Iniciar sesion" 
export default Registro
