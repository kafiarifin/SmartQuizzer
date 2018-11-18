import {combineReducers} from 'redux';
import {quesitonReducer} from './questionReducer'
import {testReducer} from './testReducer'

const rootReducer = combineReducers({
    questionData: quesitonReducer,
    testData: testReducer
});
export default rootReducer;