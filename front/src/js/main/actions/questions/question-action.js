import { fetchQuestions } from 'main/controllers/questions/question-controller';
import {
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS
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
        console.log("dqw");
        dispatch(getQuestionsRequest());
        console.log("dqw");
        try {
            const data = await fetchQuestions();
            dispatch(getQuestionsSuccess(data));
        } catch (err) {
            dispatch(getQuestionsError());
        }
    };
}
