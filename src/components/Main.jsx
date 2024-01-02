import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function Main({ color, translation }) {
  return (
    <main>
      <section className="main-left">
        <h2 style={color}>{translation.title1}</h2>
        <h3>
          {translation.subtitle1}
          <p className="date" id="work_p">
            {translation.date1}
          </p>
        </h3>
        <p className="adress">{translation.adress1}</p>
        <ul>
          <li>{translation.description1}</li>
        </ul>

        <h3>
          {translation.subtitle2}
          <p className="date" id="work_p">
            {translation.date2}
          </p>
        </h3>
        <p className="adress">{translation.adress2}</p>
        <ul>
          <li>{translation.description2}</li>
          <li>{translation.description22}</li>
        </ul>

        <h3>
          {translation.subtitle3}
          <p className="date" id="work_p">
            {translation.date3}
          </p>
        </h3>
        <p className="adress">{translation.adress3}</p>
        <ul>
          <li>{translation.description3}</li>
          <li>{translation.description33}</li>
          <li>{translation.description333}</li>
          <li>{translation.description3333}</li>
        </ul>
      </section>
      <section className="main-right">
        <h2 style={color}>{translation.title2}</h2>

        <h3>
          {translation.subtitle4}
          <p className="date" id="work_p">
            {translation.date4}
          </p>
        </h3>
        <p className="adress">{translation.adress4}</p>
        <h3>
          {translation.subtitle5}
          <p className="date" id="work_p">
            {translation.date5}
          </p>
        </h3>
        <p className="adress">{translation.adress5}</p>
        <a
          className="adress"
          href="https://drive.google.com/file/d/1x4km-XrPTAyUfGMfFSsMxPT-Mw3xYctG/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          style={color}
        >
          {translation.description4}
        </a>

        <h2 style={color}>{translation.title3}</h2>

        <div className="skill">
          <h4 id="htmltitle">
            <a
              href="https://freecodecamp.org/certification/pedrofsmartins3/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              HTML <FaHtml5 />
            </a>
          </h4>
          <div className="skill-html"></div>
        </div>
        <div className="skill">
          <h4 id="csstitle">
            <a
              href="https://freecodecamp.org/certification/pedrofsmartins3/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              CSS <FaCss3Alt />
            </a>
          </h4>
          <div className="skill-css"></div>
        </div>
        <div className="skill">
          <h4 id="javascripttitle">
            <a
              href="https://freecodecamp.org/certification/pedrofsmartins3/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript <IoLogoJavascript />
            </a>
          </h4>
          <div className="skill-js"></div>
        </div>
        <div className="skill">
          <h4 id="organizationtitle">
            {" "}
            React <FaReact />
          </h4>
          <div className="skill-react"></div>
        </div>

        <p className="discription4">&uarr; {translation.description5}</p>

        <h2 style={color}>{translation.title4}</h2>
        <a
          href="https://github.com/pedrofsmartins3?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={color}
        >
          {translation.subtitle6}
        </a>
      </section>
    </main>
  );
}
