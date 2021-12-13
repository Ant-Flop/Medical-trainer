import {applyMiddleware, combineReducers, createStore} from "redux";
import {testDataReducer} from "./TestDataReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {progressStudentReducer} from "./ProgressStudentReducer";
import {teacherPageReducer} from "./TeacherPageReducer";
import {teacherResultTestReducer} from "./TeacherResultTestReducer";



const rootReducer = combineReducers({
    testData: testDataReducer,
    progressStudentTest: progressStudentReducer,
    studentData: teacherPageReducer,
    studentResultData: teacherResultTestReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))