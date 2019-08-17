import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: () => '/authentication/select-client',
    authenticatedSelector: state => !state.auth.get('isAuthorized'),
    wrapperDisplayName: 'userIsNotAuthenticated'
});

export const userIsAuthenticatedChooseClient = connectedRouterRedirect({
    redirectPath: '/client',
    authenticatedSelector: state => !state.auth.get('isAuthorized'),
    wrapperDisplayName: 'userIsAuthenticatedChooseClient'
});

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/authentication/login',
    authenticatedSelector: state => state.auth.get('isAuthorized'),
    wrapperDisplayName: 'UserIsAuthenticated'
});
