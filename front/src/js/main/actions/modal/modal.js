import {
    SHOW_MODAL,
    HIDE_MODAL,
} from '../../constants/modal';

export function hideModal() {
    return (dispatch) => {
        dispatch({
            type: `${HIDE_MODAL}`,
        });
    };
}

export function showModal(props) {
    return {
        type: `${SHOW_MODAL}`,
        payload: {
            isActive: true,
            modalProps: props,
        },
    };
}
