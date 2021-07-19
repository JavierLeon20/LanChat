import Linea from '../Imagenes/Linea.png'
import Banderas from './Banderas'
import Boton from './Boton'
import React from 'react'

const Principal = () => {
    return (
        <div>
            <h1 id="titP">Que idioma quieres practicar hoy?</h1>
            <img src={Linea} alt="Linea" id="LinP"></img>
            <Boton pos="InicP" link="InicioSesion" text="Iniciar Sesion"></Boton>
            <Boton pos="RegiP" link="Registro" text="Registrarse"></Boton>
            <Banderas pos="Prin" tam="FlagP"></Banderas>
        </div>
    )
}

export default Principal
