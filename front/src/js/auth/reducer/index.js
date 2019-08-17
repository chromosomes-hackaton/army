import { handleActions } from 'redux-actions';
import { List } from 'immutable';

// import {} from 'client/actions';

import { Auth } from 'auth/records/Auth';

const InitialState = new Auth({});

export default handleActions({}, InitialState);
