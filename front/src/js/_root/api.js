import axios from 'axios';
import { apiUrl } from '../../config';
import authService from '../../services/authService';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Authorization': `Bearer ${authService.getToken() || ''}`,
  },
});

const handleAuthError = () => {
  authService.removeToken();
  location.reload();
};

const errorMiddleware = (error) => {
  // console.log(error.response);
  if (error.response && error.response.data) {
    const parseError = error.response.data;
    if (typeof parseError === 'object') {
      try {
        const { message, type } = JSON.parse(parseError.error);
        if (type === 'auth') {
          handleAuthError();
        }
        return Promise.reject(message);
      } catch (e) {
        // console.log(e);
      }
    }
    return Promise.reject(parseError);
  } else if (error.response) {
    return Promise.reject(error.response);
  }
  return Promise.reject(error);
};

api.interceptors.response.use(
  response => response.data,
  error => errorMiddleware(error),
);

export const post = (endpoint, data, options = {}) =>
  api.post(endpoint, data, {
    ...options,
    headers: {
      'Authorization': `Bearer ${authService.getToken() || ''}`,
    },
  });

export default api;
