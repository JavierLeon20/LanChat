import React from 'react'
import '../App.css';

function Boton(props){
    return (
        <div>
            <a id={props.pos} href={props.link} class="Button">{props.text}</a>
        </div>
    )
}

export default Boton
