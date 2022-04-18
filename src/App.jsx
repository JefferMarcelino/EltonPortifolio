import { NavBar } from "./componentes/NavBar/NavBar";
import {Home} from "./componentes/Home/Home";
import {Sobre} from "./componentes/Sobre/Sobre";
import { Skills } from "./componentes/Skills/Skills";
import "./componentes/Style/global.css";
import "./componentes/Style/animacao.css";
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


const scrollAnime = () => {
   
  const elements = document.querySelectorAll('.anima');
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const positionFromTop =position - window.innerHeight;
    if (positionFromTop <= 0) {
        element.classList.add('active');
    }
    else{
        element.classList.remove('active');
    }
  });
  
}
window.addEventListener('scroll', scrollAnime);

export default App;