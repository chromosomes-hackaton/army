import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import { hasToken } from '../../../../services/authService';
import LogIn from '../../../auth/components/log-in/log-in';
import Registration from '../../../auth/components/registration/registration';
import { withRouter } from "react-router";

import createStore from "_root/store";
import history from "_root/tools/history-tool";
import { ROUTES } from "_root/constants/routes";
import bg from "../../../../img/bg.jpg";

import "./root.scss";

const store = createStore();
const Routes = ({ history }) => (
    <>
        {
        !hasToken()
            ?
            <Switch>
                <Route
                    exact
                    path="/auth/log-in"
                    component={LogIn}
                />
                <Route
                    exact
                    path="/auth/registration"
                    component={Registration}
                />
                <Route
                    path="*"
                    render={() => <Redirect to={{ pathname: "/auth/log-in" }} />}
                />
            </Switch>
            :
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
                <Route
                    path="*"
                    render={() => <Redirect to={{ pathname: "/profile" }} />}
                />
            </Switch>
        }
    </>
);

const WithRoutes = withRouter(Routes);

class Root extends React.PureComponent {
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
                            <WithRoutes />
                        </Router>
                    </div>
                </>
            </Provider>
        );
    }
}

export default Root;
