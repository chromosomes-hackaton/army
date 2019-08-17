import {
    userIsNotAuthenticated,
    userIsAuthenticated,
    userIsAuthenticatedChooseClient
} from "_root/tools/auth-tool";

import Auth from "auth/components";
import LogIn from "auth/components/log-in/log-in";
import Parameters from "auth/components/parameters/parameters";
import Statistics from "main/components/statistics/statistics";
import Registration from "auth/components/registration/registration";
import Profile from "main/components/profile/profile";
import Questions from "main/components/questions/questions";

import Diagnosis from "main/components/diagnosis/diagnosis";

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
                path: "/auth/diagnosis",
                component: userIsNotAuthenticated(Diagnosis),
                exact: true
            },
            {
                path: "/auth/registration",
                component: userIsNotAuthenticated(Registration),
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
    },
    {
        path: "/statistics",
        component: Statistics,
        exact: true
    },
    {
        path: "/profile",
        component: Profile,
        exact: true
    },
    {
        path: "/questions",
        component: Questions,
        exact: true
    },
    {
        path: "/diag",
        component: Diagnosis,
        exact: true
    }
];
