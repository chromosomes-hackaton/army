import { userIsNotAuthenticated, userIsAuthenticated, userIsAuthenticatedChooseClient } from '_root/tools/auth-tool';

import Auth from 'auth/components';
import LogIn from 'auth/components/log-in/log-in';

export const ROUTES = [
    {
        path: '/auth',
        component: Auth,
        routes: [
            {
                path: '/auth/log-in',
                component: userIsNotAuthenticated(LogIn),
                exact: true
            }
            // {
            //     path: '/auth/register',
            //     component: userIsNotAuthenticated(LogIn),
            //     exact: true
            // },
            // {
            //     path: '/auth/login',
            //     component: userIsNotAuthenticated(LogIn),
            //     exact: true
            // },
        ]
    }
];
