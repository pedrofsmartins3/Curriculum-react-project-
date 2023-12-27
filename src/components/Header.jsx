import image from "../images/Foto-Pedro.png"
// import { FaLinkedin } from "react-icons/fa6"
// import { FaGithubSquare } from "react-icons/fa"

export default function Header() {
    return (
        <div className="Header">
            <img 
                src={image}
                alt="Foto"
                className="Foto"
            />
            <div className="Header-text">
                <h1 className="Name">Pedro Martins</h1>
                <h2 className="Profession">Programador Web</h2>
                <div className="social-media">
                    {/* <a 
                        className="social-icon" 
                        href="https://www.linkedin.com/in/pedrofsmartins3/" 
                        target="_blank">
                        <FaLinkedin />
                    </a>
                    <a 
                        className="social-icon" 
                        href="https://github.com/pedrofsmartins3" 
                        target="_blank">
                        <FaGithubSquare />
                    </a> */}
                </div>
            </div>
            <button>Português</button>
        </div> 
    )
}

// className="language-btn" onClick={() => changeLanguage()}