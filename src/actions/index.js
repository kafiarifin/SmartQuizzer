// src/js/actions/index.js
import { SELECTED_QUESTION ,NEXT_QUESTION } from "../constants";
export const updateSelection = id => ({ type: SELECTED_QUESTION, payload: id });
export const nextQuestion = () =>  ({ type: NEXT_QUESTION });