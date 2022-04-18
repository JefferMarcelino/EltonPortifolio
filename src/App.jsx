import { NavBar } from "./componentes/NavBar/NavBar";
import {Home} from "./componentes/Home/Home";
import {Sobre} from "./componentes/Sobre/Sobre";
import { Skills } from "./componentes/Skills/Skills";
import "./componentes/Style/global.css";
function App() {

  return (
    <div className="container">
      <NavBar/>
      <Home/>
      <Sobre/>
      <Skills/>
    </div>
    );
}

export default App
