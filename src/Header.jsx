import {React} from 'react'
import './header.css'

function Header() {

    const handleLogoBtn = () => {
        window.location.reload()
    }

    return(
        <div className="head">

            <div className="name-container">

            <img className="image" src="/public/2.jpg" />

            <p className="head-name" onClick={handleLogoBtn}>Renganath Chokk</p>

            </div>

            <div className="button-holder">

                <button className="head-btn" onClick={handleLogoBtn}>Home</button>
                <button className="head-btn" >About</button>
                <button className="head-btn" onClick={() => {alert("Under Construction :)")}}>Skills</button>
                <button className="head-btn" onClick={() => {alert("Under Construction :)")}}>Projects</button>
                <button className="head-btn" onClick={() => {alert("Under Construction :)")}}>About</button>

            </div>

        </div>
    )
}

export default Header