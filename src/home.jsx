import { React } from 'react';
import "./home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faGit } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Home() {
    
    return(
        <div className="home">

            <div className="img-holder">
                <img className='main-img' src="/public/5.jpg" />
            </div>

            <div className="name-holder">
                <p className="hello">Hi There 👋, This is</p>
                <p className="name">Renganath Chokk</p>
                <p className="scroll-text">Web Developer</p>

                <div className="button-grp">
                    <a href="https://youtube.com"> <FontAwesomeIcon icon={faLinkedinIn} id="profiles" /> </a>
                    <a href="https://youtube.com"> <FontAwesomeIcon icon={faGithub} id="profiles" /> </a>
                    <a href="https://youtube.com"> <FontAwesomeIcon icon={faEnvelope} id="profiles" /> </a>
                </div>

            </div>

        </div>
    )

}

export default Home