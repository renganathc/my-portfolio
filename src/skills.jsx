import { React } from 'react';
import './skills.css'


function Skills() {

    return(
        <div className="skills-container">

            <h1 className="headings"  >Languages</h1>

            <div className="logo-holder" >

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="icon"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="icon" id="python" style={{height : "71px"}} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" className="icon" id="kotlin" style={{height : "57px"}} />

            </div>

            <h1 className="headings" id="frameworks">Frameworks & Tools</h1>

            <div className="logo-holder" >


            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" className="icon" /> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="icon" /> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" className="icon" /> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" className="icon"/> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" className="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className="icon" />

            </div>

        </div>
    )

}

export default Skills