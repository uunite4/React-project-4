import React from "react";

import Nav from "./components/Nav"
import Main from "./components/MainCont"

export default function App() {

  const [darkMode, setDeakMode] = React.useState(true)

  function toggleDarkMode() {
    setDeakMode(prev => !prev)
  }

  return (
    <div className="wrapper">
      <Nav dark={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main dark={darkMode} />
    </div>
  )
}