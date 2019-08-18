const initialState = {
    diseases: [],
    specialists: [],
    isPending: false
}


export default function diseasesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DISEASES_REQUEST':
            return {
                ...state, isPending: true
            };
        case 'GET_DISEASES_SUCCESS':
            return {
                ...state,
                diseases: action.payload.data, isPending: false
            };
        case 'GET_DISEASES_ERROR':
            return {
                ...state, isPending: false
            };
        case 'GET_SPECIALISTS_SUCCESS':
            return {
                ...state, specialists: action.payload.data
            };
        default:
            return state;
    }
}
