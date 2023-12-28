import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import { en, pt } from "./Translation.jsx";

export default function App() {
  const [eng, setEng] = useState(true);

  function changeLanguage() {
    setEng((prevLang) => !prevLang);
  }

  const translation = eng ? en : pt;

  return (
    <div
      className="App"
      style={{
        backgroundColor: eng
          ? "rgba(141, 185, 218, 0.926)"
          : "rgba(221, 128, 128, 0.926)",
      }}
    >
      <Header translation={translation} changeLanguage={changeLanguage} />
      <Main translation={translation} />
      <Footer translation={translation} />
    </div>
  );
}
