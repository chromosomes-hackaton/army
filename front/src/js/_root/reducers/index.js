import { combineReducers } from 'redux';

import authReducer from 'auth/reducer';
import questionReducer from 'main/reducer/questions/index';
import modalReducer from 'main/reducer/modal/index';

export default combineReducers({
    auth: authReducer,
    questions: questionReducer,
    modal: modalReducer
});
