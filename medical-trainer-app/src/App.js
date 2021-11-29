import './App.css';
import React, {useState} from "react";
import {Combine} from "./Components/Login/Combine";
import {Routing} from "./Components/Routing";

const URL_LOGIN = "http://localhost/medical-trainer/rest-full-api/session-storage.php";


function App() {


    fetch(URL_LOGIN, {
        method: "POST",
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({action: 1})
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
        })

    const localStorageMethode = (state) => {
        const { user_id, login, name, surname, group, role } = state;
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('login', login);
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('group', group);
        localStorage.setItem('role', role);
        localStorage.setItem('connect', 'true');
    }


    const [connect, setConnect] = useState(false);
    const access = (state) => {
        if(state.connect === true)
        localStorageMethode(state);
        console.log(localStorage.getItem("connect"))
        setConnect(state.connect);
        console.log(state.connect)
    }

    return (
        <div className="App">
            {localStorage.getItem("connect") === "true" ? <Routing /> : <Combine access={access}/>}
        </div>
    );
}

export default App;
