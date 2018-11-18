// src/js/actions/index.js
import { SELECTED_QUESTION ,NEXT_QUESTION, GET_QUESTIONS } from "../constants";
import db from "../fireStoreLogicLayer";
export const updateSelection = id => ({ type: SELECTED_QUESTION, payload: id });
export const nextQuestion = isCorrect =>  ({ type: NEXT_QUESTION, payload: isCorrect });

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