const UPDATE_TEST_DATA = "UPDATE_TEST_DATA";

const defaultState = {
    /*stages: [],
    questions: [],
    answers: []*/
}


export const testDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_TEST_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}


export const updateTestData = (data) => ({type: UPDATE_TEST_DATA, payload: data})