import {createStore} from "redux";
import reducer from "./modules/index";

export const configureStore = () => createStore(reducer);