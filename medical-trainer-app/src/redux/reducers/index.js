import {applyMiddleware, combineReducers, createStore} from "redux";
import {testDataReducer} from "./TestDataReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {progressStudentReducer} from "./ProgressStudentReducer";



const rootReducer = combineReducers({
    testData: testDataReducer,
    progressStudentTest: progressStudentReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))