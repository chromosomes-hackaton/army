import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";

export default class Auth extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const { routes } = this.props;

        return (
            <div className="auth__container">
                {routes &&
                    routes.map((route, i) => <Route {...route} key={i} />)}
                <Redirect to="/auth/parameters" from="/auth" />
            </div>
        );
    }
}
