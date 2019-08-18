export const setToken = token => localStorage.setItem('t', token);
export const getToken = () => localStorage.getItem('t');
export const hasToken = () => !!localStorage.getItem('t');
export const removeToken = () => localStorage.removeItem('t');

export default ({
  setToken,
  getToken,
  hasToken,
  removeToken,
});
