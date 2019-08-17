import { post } from '../api';
import authService from '../../../services/authService';

import {
  SET_IS_CHECKING,
  SIGN_IN,
  LOG_OUT,
} from '../constants/user.constants';

export const signIn = (username, password) => async dispatch => {
  await dispatch({
    type: SET_IS_CHECKING,
    payload: true,
  });

  let error = '';

  try {
    const { user, token } = await post(`/sign-in`, { username, password });

    console.log(user);
  
    authService.setToken(token);

    await dispatch({
      type: SIGN_IN,
      payload: { ...user },
    });
  } catch (e) {
    throw e;
  }
  
  await dispatch({
    type: SET_IS_CHECKING,
    payload: false,
  });
  return error;
};

export const logOut = () => dispatch => {
  authService.removeToken();
  dispatch({ type: LOG_OUT });
};
