import {combineReducers} from "redux";
import {testDataReducer, updateTestData} from "./TestDataReducer";

export default combineReducers({
    testDataReducer,
})