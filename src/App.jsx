import Principal from './components/Principal';
import Registro from './components/Registro'
import Icono from './Imagenes/Icono.png'
import Inicio from './components/Inicio'
import logo from './Imagenes/Logo.png'
import Chat from './components/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <a href="/"><img src={logo} alt="Logo" id="Logo"></img></a>
        <img src={Icono} alt="Bob" id="Bob"></img>
        <Switch>
          <Route path="/InicioSesion">
              <Inicio></Inicio>
          </Route>
          <Route path="/Registro">
              <Registro></Registro>
          </Route>
          <Route path="/Español">
              <Chat></Chat>
          </Route>
          <Route path="/Ingles">
              <Chat></Chat>
          </Route>
          <Route path="/Frances">
              <Chat></Chat>
          </Route>
          <Route path="/Japones">
              <Chat></Chat>
          </Route>
          <Route path="/" exact>
              <Principal></Principal>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
//Principal por defecto
export default App;
