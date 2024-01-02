import image from "./images/Foto-Pedro.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Header({
  translation,
  changeLanguage,
  color,
  backgroundColor,
}) {
  return (
    <div className="header">
      <button
        className="language-btn"
        style={backgroundColor}
        onClick={changeLanguage}
      >
        {translation.setLanguage}
      </button>
      <img src={image} alt="Foto" className="Foto" width="150px" />
      <div className="Header-text">
        <h1 className="Name">Pedro Martins</h1>
        <h2 className="Profession">{translation.profession}</h2>
        <div className="contacts">
          <span className="contacts-title">{translation.contacts}</span>
          <a style={color} href="mailto:name@email.com">
            pedrofsmartins3@gmail.com
          </a>
          <a style={color} href="tel:+1234567890">
            +351 930593707
          </a>
        </div>
        <div className="social-media">
          <p>{translation.socialmedia}</p>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/pedrofsmartins3/"
            target="_blank"
            rel="noreferrer"
            style={color}
          >
            <FaLinkedin />
          </a>
          <a
            className="social-icon"
            href="https://github.com/pedrofsmartins3"
            target="_blank"
            rel="noreferrer"
            style={color}
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
