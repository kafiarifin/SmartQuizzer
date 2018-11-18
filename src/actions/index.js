// src/js/actions/index.js
import { SELECTED_QUESTION } from "../constants";
export const updateSelection = id => ({ type: SELECTED_QUESTION, payload: id });