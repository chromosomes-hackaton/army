import {
  ADD_SPECIALISTS,
} from '../constants/specialist.constants';

export const addRecommendedSpecialists = (specialists) => dispatch => dispatch({
  type: ADD_SPECIALISTS,
  payload: specialists,
});
