import {NEXT_QUESTION, SELECTED_QUESTION} from "../constants";

const initialState = {
    selectedQuestionID: null,
    questionsAttempted: 0
};
export const quesitonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_QUESTION:
            return {...state, selectedQuestionID: action.payload};
        case NEXT_QUESTION:
            return {...state, selectedQuestionID: null, questionsAttempted: state.questionsAttempted + 1};
        default:
            return state;
    }
};