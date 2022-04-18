import "./NavBar.css";
import { useState } from "react";
export const NavBar = () => {
    var classe="nav-links";
    const [isOpen, setIsOpen] = useState(true);
    return (
        <header className="header">
            <nav className="nav__bar">
                <div className="nav__logo">
                    <h1>Elton</h1>
                </div>
                <label className="button" onClick={()=>{                   
                    if(isOpen)
                    {
                        setIsOpen(false);
                    }
                    else
                    {
                        setIsOpen(true);
                    }
                }}>&equiv;</label>
                <ul className={isOpen ? "nav-links show" : "nav-links"}>
                    <li className="nav-links__item"><a href="">Home</a></li>
                    <li className="nav-links__item"><a href="">Sobre</a></li>
                    <li className="nav-links__item"><a href="">Skills</a></li>
                    <li className="nav-links__item"><a href="">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}


    
