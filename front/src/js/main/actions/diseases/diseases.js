import { fetchSpecialists, fetchDiseases} from 'main/controllers/questions/question-controller';


export function getSpecialistsSuccess(data) {
    return (dispatch) => {
        dispatch({
            type: `GET_SPECIALISTS_SUCCESS`,
            payload: {
                data
            }
        });
    };
}

export function getDiseasesSuccess(data) {
    return (dispatch) => {
        dispatch({
            type: `GET_DISEASES_SUCCESS`,
            payload: {
                data
            }
        });
    };
}

export function getDiseasesRequests() {
    return (dispatch) => {
        dispatch({
            type: `GET_DISEASES_REQUEST`,
        });
    };
}

export function getDiseasesError() {
    return (dispatch) => {
        dispatch({
            type: `GET_DISEASES_ERROR`,
        });
    };
}

export function getDiseases(Id) {
    return async (dispatch) => {

        console.log(Id, 12121212);
        dispatch(getDiseasesRequests());

        try {
            const data = await fetchDiseases(Id);
            console.log(data, 111111111);
            dispatch(getDiseasesSuccess(data));
        } catch (err) {
            dispatch(getDiseasesError());
        }
    };
}


export function getSpecialists() {
    return async (dispatch) => {
        try {
            const data = await fetchSpecialists();
            dispatch(getSpecialistsSuccess(data));
        } catch (err) {
            dispatch();
        }
    };
}
