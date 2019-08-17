import { combineReducers } from 'redux';

import authReducer from 'auth/reducer';
import userReducer from './user.reducer';
import questionReducer from 'main/reducer/questions/index';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    questions: questionReducer,
});
