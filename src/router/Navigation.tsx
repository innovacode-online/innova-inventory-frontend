import { FC } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'

import { CategoriesPage, LoginPage, NewCategoryPage, ProductsPage, SalesPage, NewSalePage, NewProductPage, ProductPage } from '../pages'

export const Navigation: FC = () => {
    return (
        <Routes>
            {/* AUTHENTICATION */}
            <Route path='/auth/login' element={ <LoginPage/> } />
            
            {/* DASHBOARD */}
            {/* <Route index element={ <ProductsPage/> }/> */}
            <Route path='/products' element={ <ProductsPage/> }/>
            <Route path='/products/new' element={ <NewProductPage/> }/>
            <Route path='/products/:slug' element={ <ProductPage/> }/>
            
            <Route path='/categories' element={ <CategoriesPage/> }/>
            <Route path='/categories/new' element={ <NewCategoryPage/> }/>
            
            <Route path='/sales' element={ <SalesPage/> }/>
            <Route path='/sales/new' element={ <NewSalePage/> }/>
            <Route path='/' element={ <Navigate to={'products'}/> } />
        </Routes>
    )
}
