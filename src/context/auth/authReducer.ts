import { User } from '../../interfaces';


export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    user?: User | null;
    token?: string | null ;
}


type AuthActionType =
    | { type: '[Auth] - Login', payload: { token: string, user: User } }
    | { type: '[Auth] - Logout' }


export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {

    switch (action.type) {
        case '[Auth] - Login':
            return {
                ...state,
                status: 'authenticated',
                user: action.payload.user,
                token: action.payload.token,
            }

        case '[Auth] - Logout':
            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                token: null,
            }


        default:
            return state;
    }

}