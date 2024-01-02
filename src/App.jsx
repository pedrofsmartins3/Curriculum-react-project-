import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import { en, pt } from "./Translation";

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
    <div className="container" style={backgroundColor}>
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
