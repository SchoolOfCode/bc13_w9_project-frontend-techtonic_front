import './App.css';
import React from 'react';
import { useState } from 'react';
import PopUp from '../PopUp/PopUp';


function App() {
const [buttonPopup, setButtonPopup]= useState (false);


  return (
    <div className="App">
      <header className="App-header">

        <main>

          <button onClick={()=>setButtonPopup(true)}>Add you resources</button>

        </main>
<PopUp trigger={buttonPopup} setTrigger={setButtonPopup} >

</PopUp>
      </header>
    </div>
  );
}

export default App;
