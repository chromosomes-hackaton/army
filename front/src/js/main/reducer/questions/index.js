import { handleActions } from 'redux-actions';

import QuestionsRecord from '../../records/questions/question-record';
import { getQuestionsSucces, getQuestionsRequest, getQuestionsError   } from '../../actions/questions/question-action';


const questionReducer = handleActions({
    [getQuestionsRequest]: (state) =>
        state
            .set('isPending', true),
    [getQuestionsSucces]: (state, { payload: { data } }) =>
        state
            .set('questions', data)
            .set('isPending', false),
    [getQuestionsError]: (state) =>
        state
            .set('isPending', false),
}, new QuestionsRecord());

export default questionReducer;
