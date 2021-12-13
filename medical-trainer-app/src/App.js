import './App.css';
import React, {useState} from "react";
import {Combine} from "./Components/Login/Combine";
import {Routing} from "./Components/Routing";
import {Header} from "./Components/Layout/Header";
import {updateTestData} from "./redux/reducers/TestDataReducer";



function App(props) {

    //const state = useSelector(state => state);

    const localStorageMethode = (state) => {
        const { user_id, login, name, surname, group, role, status_account} = state;
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('login', login);
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('group', group);
        localStorage.setItem('status_account', status_account);
        localStorage.setItem('role', role);
        localStorage.setItem('connect', 'true');
        localStorage.setItem('route-student', 'greetings');
    }



    const [connect, setConnect] = useState(false);
    const access = (state) => {
        if(state.connect === true)
        localStorageMethode(state);
        setConnect(state.connect);
        localStorage.setItem('teacherDataFirstGet', "true");
    }


    return (
        <div className="App">
            {localStorage.getItem("connect") === "true" ? <><Header/><Routing rerender={props.rerender}/></> :
                <Combine access={access} rerender={props.rerender}/>}
        </div>
    );
}

export default App;
