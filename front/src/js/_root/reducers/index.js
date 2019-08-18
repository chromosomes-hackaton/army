import { combineReducers } from 'redux';

import authReducer from 'auth/reducer';
import userReducer from './user.reducer';
import questionReducer from 'main/reducer/questions/index';
import modalReducer from 'main/reducer/modal/index';
import specialistReducer from './specialist.reducer';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    questions: questionReducer,
    modal: modalReducer,
    specialist: specialistReducer,
});
