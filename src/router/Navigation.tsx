import { FC } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'

import { CategoriesPage, LoginPage, ProductsPage, SalesPage } from '../pages'

export const Navigation: FC = () => {
    return (
        <Routes>
            {/* AUTHENTICATION */}
            <Route path='/auth/login' element={ <LoginPage/> } />
            
            {/* DASHBOARD */}
            {/* <Route index element={ <ProductsPage/> }/> */}
            <Route path='/products' element={ <ProductsPage/> }/>
            <Route path='/categories' element={ <CategoriesPage/> }/>
            <Route path='/sales' element={ <SalesPage/> }/>
            <Route path='/' element={ <Navigate to={'products'}/> } />
        </Routes>
    )
}
