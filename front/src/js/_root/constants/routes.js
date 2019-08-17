import {
    userIsNotAuthenticated,
    userIsAuthenticated,
    userIsAuthenticatedChooseClient
} from "_root/tools/auth-tool";

import Auth from "auth/components";
import LogIn from "auth/components/log-in/log-in";
import Parameters from "auth/components/parameters/parameters";

export const ROUTES = [
    {
        path: "/auth",
        component: Auth,
        routes: [
            {
                path: "/auth/log-in",
                component: userIsNotAuthenticated(LogIn),
                exact: true
            },
            {
                path: "/auth/parameters",
                component: userIsNotAuthenticated(Parameters),
                exact: true
            }
            // {
            //     path: '/auth/login',
            //     component: userIsNotAuthenticated(LogIn),
            //     exact: true
            // },
        ]
    }
];
