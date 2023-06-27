import { createContext } from 'react'
import { User } from '../../interfaces';

interface ContextProps {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    user?: User | null;
    token?: string | null ;

    isLoading: boolean;
    isError: { hasError: boolean, message:string };
    // setIsLoading: Dispatch<SetStateAction<boolean>>

    // registerUser: (email: string, password: string, name: string, lastname: string, username: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext( {} as ContextProps );