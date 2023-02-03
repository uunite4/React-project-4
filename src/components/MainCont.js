import React from "react";

export default function Main(props) {
  return (
    <main className={props.dark ? "dark" : "light"}>
      <span className="text-cont">
        <h1 className="title">Fun facts about React</h1>
        <ul className="list">
          <li className="list-item">Was released in 2013</li>
          <li className="list-item">Was originally created by Jorden Walke</li>
          <li className="list-item">Has well over 100k stars on GitHub</li>
          <li className="list-item">Is maintained by Facebook</li>
          <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </span>
    </main>
  )
}