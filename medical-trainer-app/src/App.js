import './App.css';
import React, {useState} from "react";
import {Combine} from "./Components/Login/Combine";
import Menu from "./Components/Menu";

function App() {
    const [connect, setConnect] = useState(false);

    const access = (state)=>{
        setConnect(state)
    }

  return (
    <div className="App">
        {connect ? <Menu/> : <Combine access={access} />}
    </div>
  );
}

export default App;
