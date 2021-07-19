import Linea from '../Imagenes/Linea.png'
import Banderas from './Banderas'
import Boton from './Boton'
import React from 'react'
import '../App.css';

const Chat = () => {
    function Formato(){
        return(
          <div id="CajaC">
              <Boton pos="env" text="Enviar"></Boton>
              <img src={Linea} alt="Linea" id="LinCH"></img>
              <input id="msgg" type="text" value="Escribe un mensaje"></input>
              <div id="CajaCc"></div>
          </div>
        );
    }
    return (
        <div>
            <Boton pos="RegiP" link="/" text="Cerrar Sesion"></Boton>
            <Formato></Formato>
            <h2 id="list">Chats</h2>
            <img src={Linea} alt="Linea" id="LinV"></img>
            <Banderas pos="Chat" tam="FlagP"></Banderas>
        </div>
    )
}

export default Chat
