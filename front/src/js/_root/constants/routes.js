import Statistics from "main/components/statistics/statistics";
import Profile from "main/components/profile/profile";
import Questions from "main/components/questions/questions";

import Diagnosis from "main/components/diagnosis/diagnosis";

export const ROUTES = [
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
