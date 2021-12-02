const UPDATE_PROGRESS_STUDENT = "UPDATE_PROGRESS_STUDENT";

const defaultState = {
    progress: [
        {
            id: "",
            current_stage_name: "",
            current_stage_id: "",
            question_text: "",
            question_id: "",
            answers: []
        }
    ],
    status: "",
    result: {
        user_id: "",
        testResult: "",
        stage_id: "",
        datetime: ""
    }
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