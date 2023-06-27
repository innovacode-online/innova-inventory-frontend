import { FC, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage } from '../../pages';
import { AuthContext } from '../../context';

export const AuthNavigation: FC = () => {
    const { status } = useContext(AuthContext);

    return ( status === 'not-authenticated' )
    ? (
        <Routes>
            <Route path='login' element={ <LoginPage/> } />
        </Routes>
    )
    : (
        <Navigate to='/'/>
    )
}
