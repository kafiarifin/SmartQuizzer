// src/js/actions/index.js
import { SELECTED_QUESTION ,NEXT_QUESTION, GET_QUESTIONS , UPDATE_QUESTION_INDEX} from "../constants";
import db from "../fireStoreLogicLayer";
export const updateSelection = (id, isMultiAnswer) => ({ type: SELECTED_QUESTION, payload: {id, isMultiAnswer} });
export const nextQuestion = isCorrect =>  ({ type: NEXT_QUESTION, payload: isCorrect });
export const updateQuestionIndex = () => ({type: UPDATE_QUESTION_INDEX});

export const retrieveData = (docName) => {
    return dispatch => {
        db.collection("test").doc(docName).get().then((doc) => {
            dispatch(getQuestions(doc.data().quizData));
        });
    };
};

export const getQuestions = (data) => {
        return {
            type: GET_QUESTIONS,
            payload:   data
        }
};