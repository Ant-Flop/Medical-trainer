const UPDATE_PROGRESS_STUDENT = "UPDATE_PROGRESS_STUDENT";

const defaultState = {

}

export const progressStudentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_PROGRESS_STUDENT:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export const updateProgressStudent = (data) => ({type: UPDATE_PROGRESS_STUDENT, payload: data})