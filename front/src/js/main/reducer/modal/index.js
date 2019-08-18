import { SHOW_MODAL, HIDE_MODAL } from '../../constants/modal';

const initialState = {
    isActive: false,
    modalProps: 0
};


export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                modalProps: action.payload.modalProps, isActive: true
            };
        case HIDE_MODAL:
            return {
                modalProps: 0 , isActive: false
            };
        default:
            return state;
    }
}
