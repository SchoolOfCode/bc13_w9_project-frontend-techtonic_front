import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import PopUp from '../PopUp/PopUp';
import SearchDisplay from "../SearchDisplay";
import WebFont from "webfontloader";


function App() {
const [buttonPopup, setButtonPopup]= useState (false);

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
      <button onClick={()=>setButtonPopup(true)}>Add you resources</button>
       <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
        <SearchDisplay />
      </body>
      <footer></footer>
    </div>
  );
}



export default App;
