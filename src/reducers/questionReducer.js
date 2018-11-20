import {NEXT_QUESTION, SELECTED_QUESTION, UPDATE_QUESTION_INDEX} from "../constants";

const initialState = {
    selectedQuestionID: null,
    questionsAttempted: 0
};
export const quesitonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_QUESTION:
            if (action.payload.isMultiAnswer) {
                if (!state.selectedQuestionID) state.selectedQuestionID = [];
                let answers;
                if(state.selectedQuestionID.includes(action.payload.id)) {
                    answers = state.selectedQuestionID.filter(e => e !== action.payload.id);
                } else {
                    answers = state.selectedQuestionID.concat(action.payload.id);
                }

                return {
                    ...state,
                    selectedQuestionID: answers
                };
            } else {
                return {
                    ...state,
                    selectedQuestionID: action.payload.id
                };
            }

        case NEXT_QUESTION:
            return {
                ...state,
                selectedQuestionID: null,
                questionsAttempted: state.questionsAttempted + 1,
                wasCorrect: action.payload
            };
        case UPDATE_QUESTION_INDEX:
            return {
                ...state,
                questionsAttempted: 0
            };
        default:
            return state;
    }
};