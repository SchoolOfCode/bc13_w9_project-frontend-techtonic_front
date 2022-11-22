import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import AddAndSearchDisplay from "../AddAndSearchDisplay";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Big Shoulders Display", "Open Sans"],
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-header">LUMEN</h1>
      </header>
      <body className="App-body">
        <AddAndSearchDisplay />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
