import React from "react";
import ReactLogo from "../images/react-logo.png"

export default function Nav(props) {
  return (
    <nav className={props.dark ? "dark" : "light"}>
      <div className="logo-cont">
        <img className="logo-img" src={ReactLogo}></img>
        <h3 className="logo-text">ReactFacts</h3>
      </div>
      <div className="toggle-cont">
        <p>DARK</p>
        <div className="toggle" onClick={props.toggleDarkMode}>
          <div className="toggle-handle"></div>
        </div>
        <p>LIGHT</p>
      </div>
      <h4 className="proj-1">React Course - Project 1#</h4>
    </nav>
  )
}