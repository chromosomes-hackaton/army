// import { handleActions } from 'redux-actions';

import QuestionsRecord from '../../records/questions/question-record';

import {
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS,
    GET_SPECIALISTS_SUCCESS
} from '../../constants/questions';
// import { getQuestionsSucces, getQuestionsRequest, getQuestionsError } from '../../actions/questions/question-action';


// export const questionReducer = handleActions({
//     [getQuestionsRequest]: (state) =>
//         state
//             .set('isPending', true),
//     [getQuestionsSucces]: (state, { payload }) => {

//         console.log(payload, 111111111111)
//         return state
//             .set('questions', payload.data)
//             .set('isPending', false);
//     },
//     [getQuestionsError]: (state) =>
//         state
//             .set('isPending', false),
// }, new QuestionsRecord());

const initialState = {
    questions: [],
    specialists: [],
    isPending: false
}


export default function questionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS_REQUEST:
            return {
                ...state, isPending: true
            };
        case GET_QUESTIONS_SUCCESS:
            return { ...state,
                questions: action.payload.data, isPending: false
            };
        case GET_QUESTIONS_ERROR:
            return {
                ...state, isPending: false
            };
        case GET_SPECIALISTS_SUCCESS:
            return {
                ...state, specialists: action.payload.data
            };
        default:
            return state;
    }
}
