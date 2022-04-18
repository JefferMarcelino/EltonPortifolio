import my__img from "../img/logo.svg";
import "./Sobre.css"
export const Sobre = () => {
    return (
    <div className="about">
      <h1>Sobre</h1>
        <div className="content">
            <img src={my__img} alt="" srcset="" />
            <div className="content__ard">
                <h2>I'm Elton</h2>
                <p>
                Computer Engineering Student at the Higher Institute of Science and Technology of Mozambique (ISCTEM)
                studying the fourth year of Computer Engineering, and I'm learning to develop web applications with html, css js Vanilla end ReactJS.
                </p>
            </div>
                
        </div>
    </div>  
    )
}
 
