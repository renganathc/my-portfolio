import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return(
        <div className="footer" >
            <p className="foot-text">© 2025 Renganath Chokkalingam. All Rights Reserved</p>

            <div className="button-grp-foot">
                <a href="https://youtube.com"> <FontAwesomeIcon icon={faLinkedinIn} id="footer-profiles" /> </a>
                <a href="https://youtube.com"> <FontAwesomeIcon icon={faGithub} id="footer-profiles" /> </a>
                <a href="https://youtube.com"> <FontAwesomeIcon icon={faEnvelope} id="footer-profiles" /> </a>
            </div>

        </div>
    )
}

export default Footer