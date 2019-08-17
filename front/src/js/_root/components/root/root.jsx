import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Router, Redirect } from "react-router-dom";

import createStore from "_root/store";
import history from "_root/tools/history-tool";
import bg from "../../../../img/bg.jpg";

import "./root.scss";

const store = createStore();

export default class Root extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <>
                    <div
                        className="app-bg"
                        style={{ background: `url(${bg})` }}
                    />
                    <div className="app-content">
                        <Router history={history}>
                            <Switch>
                                {ROUTES.map((route, i) => (
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props => (
                                            <route.component
                                                {...props}
                                                routes={route.routes}
                                            />
                                        )}
                                    />
                                ))}

                                {/* <Redirect to="/statistics" /> */}
                            </Switch>
                        </Router>
                    </div>
                </>
            </Provider>
        );
    }
}
