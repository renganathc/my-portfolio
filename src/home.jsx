import "./home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Home() {
    
    return(
        <div className="home">

            <div className="img-holder">
                <img className='main-img' src="/headshot2.jpg" />
            </div>

            <div className="name-holder">
                <p className="hello">Hi There 👋, This is</p>
                <p className="name">Renganath Chokk</p>
                <p className="scroll-text">{"Fullstack Developer"}</p>

                <div className="button-grp">
                    <a href="https://www.linkedin.com/in/renganathc/"> <FontAwesomeIcon icon={faLinkedinIn} id="profiles" /> </a>
                    <a href="https://github.com/renganathc"> <FontAwesomeIcon icon={faGithub} id="profiles" /> </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <FontAwesomeIcon icon={faEnvelope} id="profiles" /> </a>
                </div>

            </div>

        </div>
    )

}

export default Home