const UPDATE_STUDENT_DATA = "UPDATE_STUDENT_DATA";

const defaultState = {

}


export const teacherPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_STUDENT_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}


export const updateTeacherPage = (data) => ({type: UPDATE_STUDENT_DATA, payload: data})