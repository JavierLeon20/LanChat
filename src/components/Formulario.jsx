import Linea from '../Imagenes/Linea.png'
import Banderas from './Banderas'
import Boton from './Boton'
import React from 'react'

function Formulario (props) {
    return (
        <div id="Formulario">
            <img src={Linea} alt="Linea" id="LinIF"></img>
            <img src={Linea} alt="Linea" id="LinCF"></img>
            <input id='corr' type='text' value='Correo electronico'></input>
            <input id='pasw' tupe='pasword' value='Contraseña'></input>
            <h1 id="titF">Quiero empezar con...</h1>
            <Banderas pos='Form' tam='FlagF'></Banderas>
            <Boton pos="InicF" link="Español" text="Iniciar Sesion"></Boton>
            <Boton pos="RegiF" link="Registro" text="Registrarse"></Boton>
        </div>
    )
}

export default Formulario
