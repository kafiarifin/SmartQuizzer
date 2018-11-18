import {combineReducers} from 'redux';
import {quesitonReducer} from './questionReducer'

const rootReducer = combineReducers({
    questionData: quesitonReducer,
});
export default rootReducer;