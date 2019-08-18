import {
  ADD_SPECIALISTS,
} from '../constants/specialist.constants';

const initialState = {
  recommendedSpecialists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPECIALISTS:
      return ({
        ...state,
        recommendedSpecialists: action.payload,
      });

    default:	
      return state;	
  }	
};
