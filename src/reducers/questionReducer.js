import { SELECTED_QUESTION } from "../constants";
const initialState = {
    selectedQuestionID: null
};
export const quesitonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_QUESTION:
            return { ...state, selectedQuestionID: action.payload };
        default:
            return state;
    }
};