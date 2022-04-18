import my__img from "../img/SKILLS.png";
import {Barra} from "./Barra"
import "./Skills.css";
export const Skills=()=>{
    return(
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills__content">
                <div className="content__s">
                    <div className="skills-title">
                        <div className="skills_la" >
                            <div className="skills__">
                                <i class="bx bxl-html5 skills__icon"></i>
                                <h2>HTML5</h2>
                            </div>
                            <p>90%</p>
                        </div>
                        <Barra tamanho="90%"/>
                    </div>

                    <div className="skills-title">
                        <div className="skills_la" >
                            <div className="skills__">
                                <i class="bx bxl-css3 skills__icon"></i>
                                <h2>CSS3</h2>   
                            </div>
                            <p>80%</p>
                        </div>
                        <Barra tamanho="80%"/>
                    </div>

                    <div className="skills-title">
                        <div className="skills_la" >
                            <div className="skills__">
                                <i class="bx bxl-javascript skills__icon"></i>
                                <h2>JAVASCRIPT</h2>
                            </div>
                            <p>50%</p>
                        </div>
                        <Barra tamanho="50%"/>
                    </div>
                </div>

                <div className="skills__img">
                    <img src={my__img} alt="" srcset="" />
                </div>

            </div>
        </div>
    )
}

