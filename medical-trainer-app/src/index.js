import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/reducers";


const rerenderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
                <App rerender={rerenderTree}/>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderTree();