import {GET_QUESTIONS} from "../constants";

const initialState = {
    data: null
};
export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};