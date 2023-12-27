import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"

export default function Main() {
    return (
        <main className="main">
            <section className="main-left">
                <h2>Professional Experience</h2>
                <h3>Primavera Sound Festival
                        <date id="work_date">&rarr; 2018</date>
                </h3>
                <adress>Barcelona, Spain</adress>
                <ul>
                    <li>Seller in one of the event bars</li>
                </ul>
                    
                <h3>Futebol Coach
                    <date id="work_date">&rarr; 2018 - 2019</date>
                </h3>
                <adress>Porto, Portugal</adress>
                <ul>
                    <li>Coach from under 5 to under 12</li>
                    <li>Teach young kids about discipline and team building</li>
                </ul>
                    
                <h3>Sales and Team Builder
                    <date id="work_date">&rarr; 2022 - Present</date>
                </h3>
                <adress>Online, Home office</adress>
                <ul>
                    <li>Responsible for marketing the brand in the market</li>
                    <li>Travel club membership commercial</li>
                    <li>Responsable to teach sales</li>
                    <li>Team builder</li>
                </ul>
            </section>
            <section className="main-right">
   
                <h2>Academic Education</h2>

                <h3>High School
                    <date id="work_date">&rarr; 2013 - 2016</date>
                </h3>
                <adress>Carvalhos Boarding School, Porto</adress>
                <h3>University education
                    <date id="work_date">&rarr; 2018 - 2022</date>
                </h3>
                <adress>FADEUP, University of Porto</adress>

                <h2>Software Skills</h2>
            
                <div className="skill">
                    <h4 id="htmltitle">HTML <FaHtml5/></h4>
                    <div className="skill-html"></div>
                </div>
                <div className="skill">
                    <h4 id="csstitle">CSS <FaCss3Alt/> </h4>
                    <div className="skill-css"></div>
                </div>
                <div className="skill">
                    <h4 id="javascripttitle">JavaScript <IoLogoJavascript/></h4>
                    <div className="skill-js"></div>
                    </div>
                <div className="skill">
                    <h4 id="organizationtitle">React <FaReact/></h4>
                    <div className="skill-react"></div>
                </div>

                <h2>GitHub Repositories</h2>
                {/* <a href="https://github.com/pedrofsmartins3?tab=repositories" target="_blank">My personal GitHub repositories!</a> */}

            </section>
        </main> 
    )
}