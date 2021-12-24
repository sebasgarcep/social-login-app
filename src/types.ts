export type Session = {
    scheme: string,
    credentials: string,
    expiresAt: number,
};

/**
 * App State
 */

export type SessionState = {
    session: Session | null,
};

export type RootState = {
    session: SessionState,
};

/**
 * Actions
 */

export type LoginAction = {
    type: 'LOGIN',
    session: Session,
};

export type LogoutAction = {
    type: 'LOGOUT',
};

export type Action =
    | LoginAction
    | LogoutAction
;

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    Login: undefined,
    Home: undefined,
    NotFound: undefined,
};