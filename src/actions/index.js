// src/js/actions/index.js
import { SELECTED_QUESTION ,NEXT_QUESTION, GET_QUESTIONS , UPDATE_QUESTION_INDEX} from "../constants";
import db from "../fireStoreLogicLayer";
export const updateSelection = (id, isMultiAnswer) => ({ type: SELECTED_QUESTION, payload: {id, isMultiAnswer} });
export const nextQuestion = isCorrect =>  ({ type: NEXT_QUESTION, payload: isCorrect });
export const updateQuestionIndex = () => ({type: UPDATE_QUESTION_INDEX});

export const retrieveData = () => {
    return async dispatch => {
        const questions = []
        await db.collection("test").doc('testOne').get().then((doc) => {
            doc.data().quizData.map(data => questions.push(data));
        });

        await db.collection("test").doc('testTwo').get().then((doc) => {
            doc.data().quizData.map(data => questions.push(data));
        });

        console.log(questions)

        dispatch(getQuestions(questions));
    };
};

export const getQuestions = (data) => {
        return {
            type: GET_QUESTIONS,
            payload:   data
        }
};
