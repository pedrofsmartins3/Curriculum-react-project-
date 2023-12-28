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

  const MyColors = eng ? "rgba(0, 125, 255, 0.7)" : "rgba(255, 99, 71, 0.8)";

  const color = {
    color: MyColors,
  };

  const backgroundColor = {
    backgroundColor: MyColors,
  };

  const translation = eng ? en : pt;

  return (
    <div className="App" style={backgroundColor}>
      <Header
        translation={translation}
        changeLanguage={changeLanguage}
        color={color}
        backgroundColor={backgroundColor}
      />
      <Main translation={translation} color={color} />
      <Footer translation={translation} />
    </div>
  );
}
