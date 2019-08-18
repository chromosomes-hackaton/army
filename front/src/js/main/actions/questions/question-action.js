import { fetchQuestions, fetchSpecialists } from 'main/controllers/questions/question-controller';
import {
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS,
    GET_SPECIALISTS_SUCCESS
} from '../../constants/questions';


export function getQuestionsSuccess(data) {
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
            dispatch(getQuestionsSuccess(data));
        } catch (err) {
            dispatch(getQuestionsError());
        }
    };
}

export function getSpecialistsSuccess(data) {
    return (dispatch) => {
        dispatch({
            type: GET_SPECIALISTS_SUCCESS,
            payload: {
                data
            }
        });
    };
}

export function getSpecialists(Ids) {
    return async (dispatch) => {
        try {
            const data = await fetchSpecialists(Ids);
            dispatch(getSpecialistsSuccess(data));
        } catch (err) {
            dispatch();
        }
    };
}
