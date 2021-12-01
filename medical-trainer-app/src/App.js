import './App.css';
import React, {useState} from "react";
import {Combine} from "./Components/Login/Combine";
import {Routing} from "./Components/Routing";
import {Header} from "./Components/Layout/Header";
import {Route, Routes} from "react-router";
import {TestPage} from "./Components/MainPageStudent/TestPage";
import {useSelector} from "react-redux";



function App() {

    //const state = useSelector(state => state);

    const localStorageMethode = (state) => {
        const { user_id, login, name, surname, group, role } = state;
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('login', login);
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('group', group);
        localStorage.setItem('role', role);
        localStorage.setItem('connect', 'true');
        localStorage.setItem('route-student', 'greetings');
    }


    const [connect, setConnect] = useState(false);
    const access = (state) => {
        if(state.connect === true)
        localStorageMethode(state);
        setConnect(state.connect);
    }


    return (
        <div className="App">
            {localStorage.getItem("connect") === "true" ? <><Header/><Routing /></> : <Combine access={access}/>}
        </div>
    );
}

export default App;
