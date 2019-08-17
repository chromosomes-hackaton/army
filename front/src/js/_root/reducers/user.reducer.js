import {
  SET_IS_CHECKING,
  SIGN_IN,
  LOG_OUT,
} from '../constants/user.constants';

const initialState = {
  isCheching: false,
  isLoggedIn: false,
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_CHECKING:
      return ({
        ...state,
        isCheching: action.payload,
      });

    case SIGN_IN:
      return ({
        ...state,
        ...action.payload,
        isLoggedIn: true,
      });

    case LOG_OUT:
      return ({
        ...initialState,
      });

    default:	
      return state;	
  }	
};
