import { FC, useContext } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'

import { CategoriesPage, LoginPage, NewCategoryPage, ProductsPage, SalesPage, NewSalePage, NewProductPage, ProductPage } from '../pages'
import { AuthContext } from '../context'
import { LoadingView } from '../components'
import { AuthNavigation } from './auth/AuthNavigation'
import { DashboardNavigation } from './dashboard/DashboardNavigation'

export const Navigation: FC = () => {
    
    const { status } = useContext(AuthContext);
    console.log(status);

    if( status == 'checking' ){
        return <LoadingView/>
    }


    return (
        <Routes>
            <Route path='/auth/*' element={ <AuthNavigation/> }/>
            <Route path='/*' element={ <DashboardNavigation/> }/>
        </Routes>
    )
}
