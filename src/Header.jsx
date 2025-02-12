import {React} from 'react'
import './header.css'

function Header() {

    const handleLogoBtn = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
    }

    return(
        <div className="head">

            <div className="name-container">

            <img className="image" src="/2.jpg" />

            <p className="head-name" onClick={handleLogoBtn}>Renganath Chokk</p>

            </div>

            <div className="button-holder">

                <button className="head-btn" onClick={handleLogoBtn}>Home</button>
                <button className="head-btn" onClick={() => {document.getElementById("about-head")?.scrollIntoView({behavior : "smooth", block : "center"});}}>About</button>
                <button className="head-btn" onClick={() => {document.getElementById("frameworks")?.scrollIntoView({behavior : "smooth", block : "center"});}}>Skills</button>
                <button className="head-btn" onClick={() => {document.getElementById("projects-head")?.scrollIntoView({behavior : "smooth", block : "center"});}}>Projects</button>

            </div>

        </div>
    )
}

export default Header