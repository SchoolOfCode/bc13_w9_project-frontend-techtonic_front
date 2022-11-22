import "./App.css";
import React from "react";
import { useEffect } from "react";
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className="App-header">
        <h1 className="page-header">LUMEN</h1>
        <h2 className="page-subheader">ENLIGHTEN YOUR LEARNING</h2>
      </header>
      <body className="App-body">
        <AddAndSearchDisplay />
      </body>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
