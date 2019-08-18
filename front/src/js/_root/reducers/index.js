import { combineReducers } from 'redux';

import authReducer from 'auth/reducer';
import  questionReducer  from 'main/reducer/questions/index';

export default combineReducers({
    auth: authReducer,
    questions: questionReducer
});
