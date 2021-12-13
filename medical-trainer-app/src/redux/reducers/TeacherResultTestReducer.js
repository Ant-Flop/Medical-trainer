const UPDATE_STUDENT_TEST_RESULT_DATA= "UPDATE_STUDENT_TEST_RESULT_DATA";

const defaultState = {

}


export const teacherResultTestReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_STUDENT_TEST_RESULT_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}


export const updateTeacherResultTest = (data) => ({type: UPDATE_STUDENT_TEST_RESULT_DATA, payload: data})