import Español from '../Imagenes/Español.png'
import Ingles from '../Imagenes/Ingles.png'
import Frances from '../Imagenes/Frances.png'
import Japones from '../Imagenes/Japones.png'
import React from 'react'
import '../App.css'; 

function Banderas(props) {
    return (
        <div id={props.pos}>
            <a href="Español"><img src={Español} alt="Español" id={props.tam}></img></a>
            <a href="Ingles"><img src={Ingles} alt="Ingles" id={props.tam}></img></a>
            <a href="Frances"><img src={Frances} alt="Frances" id={props.tam}></img></a>
            <a href="Japones"><img src={Japones} alt="Japones" id={props.tam}></img></a>
        </div>
    )
}

//Posibilidad salto de linea entre iconos
//Eliminar bandera segun chat actual
export default Banderas
