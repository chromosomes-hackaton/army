import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router, Redirect } from 'react-router-dom';

import createStore from '_root/store';
import history from '_root/tools/history-tool';
import { ROUTES } from '_root/constants/routes';

import './root.scss';

const store = createStore();

export default class Root extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <div className="app-content">
                    <Router history={history}>
                        <Switch>
                            {ROUTES.map((route, i) => (
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => <route.component {...props} routes={route.routes} />}
                                />
                            ))}

                            <Redirect to="/profile" />
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}
