import { fetchQuestions } from 'main/controllers/questions/question-controller';
import {
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS
} from '../../constants/questions';


export function getQuestionsSucces(data) {
    return (dispatch) => {
        dispatch({
            type: `${GET_QUESTIONS_SUCCESS}`,
            payload: {
                data
            }
        });
    };
}

export function getQuestionsRequest() {
    return (dispatch) => {
        dispatch({
            type: `${GET_QUESTIONS_REQUEST}`,
        });
    };
}

export function getQuestionsError() {
    return (dispatch) => {
        dispatch({
            type: `${GET_QUESTIONS_ERROR}`,
        });
    };
}

export function getQuestions() {
    return async (dispatch) => {
        dispatch(getQuestionsRequest());

        try {
            const data = await fetchQuestions();
            dispatch(getQuestionsSucces(data));
        } catch (err) {
            dispatch(getQuestionsError());
        }
    };
}
