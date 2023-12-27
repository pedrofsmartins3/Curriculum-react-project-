import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
// import React from "react"


export default function App() {
  
  // const [eng, setEng] = React.useState(true)

  // function changeLanguage() {
  //   setEng(prevLang => !prevLang)
  // }

  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer />
    </div>
    )
}

//isEng={eng}   changeLanguage={changeLanguage}
