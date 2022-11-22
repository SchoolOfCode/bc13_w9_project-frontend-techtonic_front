import "./App.css";
import SearchDisplay from "../SearchDisplay";
import WebFont from "webfontloader";
import { useEffect } from "react";

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
        <SearchDisplay />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
