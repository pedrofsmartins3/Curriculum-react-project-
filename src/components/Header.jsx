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
    <div className="Header">
      <img src={image} alt="Foto" className="Foto" />
      <div className="Header-text">
        <h1 className="Name">Pedro Martins</h1>
        <h2 className="Profession">{translation.profession}</h2>
        <div className="social-media">
          <h5>{translation.socialmedia}</h5>
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
      <button
        className="language-btn"
        style={backgroundColor}
        onClick={changeLanguage}
      >
        {translation.setLanguage}
      </button>
    </div>
  );
}
