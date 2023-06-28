import { FC, useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthState, authReducer } from '.';
import inventoryDb from '../../api/inventoryDb';
import axios from 'axios';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const AuthProvider:FC<PropsProvider> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({hasError: false, message: ''})
    
    const navigate = useNavigate();


    //? INICIALIZACION DE RUCER
    const AUTH_INITIAL_STATE: AuthState = {
        status  : 'checking',
        user    : null,
        token   : null,
    }           
    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );

    
    const checkToken = async() => {
        const token = localStorage.getItem('AUTH_TOKEN');

        if ( !token ) {
            dispatch({ type: '[Auth] - Logout' });
            return;
        }

        try {
            const { data: user } = await inventoryDb.get('/user',{ headers:{ Authorization: `Bearer ${ token }`} })
            dispatch({ type: '[Auth] - Login', payload: { user, token } as any });
        
        } catch (error) {
            if ( axios.isAxiosError(error) ){
                localStorage.removeItem('AUTH_TOKEN');
                dispatch({ type: '[Auth] - Logout' });
            }
        }
    }

    useEffect(() => {
        checkToken();
    }, [])

    const loginUser =  async (email: string, password: string ): Promise<void> => {
        
        setIsLoading( true );
        
        try {
            const { data } = await inventoryDb.post('/auth/login', { email, password });
            const { user, token } = data;
            dispatch({ type: '[Auth] - Login', payload: {user, token} });

            localStorage.setItem('AUTH_TOKEN', token)
            setIsError({
                hasError: false,
                message:''
            })

        } catch (error) {
            if ( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message:error.response?.data.message
                })
            }
        } finally{
            setIsLoading(false)
        }
    }   

    const logout = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        await inventoryDb.post('/auth/logout', null, { headers:{ Authorization: `Bearer ${ token }`} })
        
        localStorage.removeItem('AUTH_TOKEN');
        dispatch({ type: '[Auth] - Logout' });
        navigate('/auth/login')
    }


    return (
        <AuthContext.Provider value={{
            ...state,
            isError,
            isLoading,

            loginUser,
            logout
        }}> 
            { children }
        </AuthContext.Provider>
    )
}