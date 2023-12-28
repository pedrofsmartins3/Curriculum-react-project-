import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function Main({ translation }) {
  return (
    <main className="main">
      <section className="main-left">
        <h2>{translation.title1}</h2>
        <h3>
          {translation.subtitle1}
          <p className="date" id="work_p">
            &rarr; {translation.date1}
          </p>
        </h3>
        <p className="adress">{translation.adress1}</p>
        <ul>
          <li>{translation.description1}</li>
        </ul>

        <h3>
          {translation.subtitle2}
          <p className="date" id="work_p">
            &rarr; {translation.date2}
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
            &rarr; {translation.date3}
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
        <h2>{translation.title2}</h2>

        <h3>
          {translation.subtitle4}
          <p className="date" id="work_p">
            &rarr; {translation.date4}
          </p>
        </h3>
        <p className="adress">{translation.adress4}</p>
        <h3>
          {translation.subtitle5}
          <p className="date" id="work_p">
            &rarr; {translation.date5}
          </p>
        </h3>
        <p className="adress">{translation.adress5}</p>

        <h2>{translation.title3}</h2>

        <div className="skill">
          <h4 id="htmltitle">
            HTML <FaHtml5 />
          </h4>
          <div className="skill-html"></div>
        </div>
        <div className="skill">
          <h4 id="csstitle">
            CSS <FaCss3Alt />{" "}
          </h4>
          <div className="skill-css"></div>
        </div>
        <div className="skill">
          <h4 id="javascripttitle">
            JavaScript <IoLogoJavascript />
          </h4>
          <div className="skill-js"></div>
        </div>
        <div className="skill">
          <h4 id="organizationtitle">
            React <FaReact />
          </h4>
          <div className="skill-react"></div>
        </div>

        <h2>{translation.title4}</h2>
        <a
          href="https://github.com/pedrofsmartins3?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {translation.subtitle6}
        </a>
      </section>
    </main>
  );
}
