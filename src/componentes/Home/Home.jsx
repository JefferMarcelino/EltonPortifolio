import my__img from "../img/logo.svg";
import "./Home.css";
export const Home = () => {
    return(
        <div className="home">
            <div className="center">
                <div className="home__content">
                    <p>Hi,<br/> I'am <span>Elton</span><br/> web Developer</p>
                    <a href="#">Contact</a>
                </div>
                <div className="my__img">
                    <img src={my__img} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}