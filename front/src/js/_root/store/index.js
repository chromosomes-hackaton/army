import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from '_root/constants/initial-state';
import rootReducer from '_root/reducers';

export default () => {
    const store = createStore(
        rootReducer,
        initialState,

        compose(
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
            applyMiddleware(thunk)
        )
    );

    return store;
};
