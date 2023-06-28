import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CategoriesPage, NewCategoryPage, NewProductPage, NewSalePage, ProductPage, ProductsPage, SalePage, SalesPage } from '../../pages';
import { AuthContext } from '../../context';

export const DashboardNavigation = () => {
    const { status } = useContext(AuthContext);


    return ( status === 'authenticated' )
    ? (
        <Routes>
            <Route index element={ <Navigate to={'products'}/> } />
            <Route path='products' element={ <ProductsPage/> }/>
            <Route path='/products/new' element={ <NewProductPage/> }/>
            <Route path='/products/:slug' element={ <ProductPage/> }/>

            <Route path='/categories' element={ <CategoriesPage/> }/>
            <Route path='/categories/new' element={ <NewCategoryPage/> }/>
            
            <Route path='/sales' element={ <SalesPage/> }/>
            <Route path='/sales/:id' element={ <SalePage/> }/>
            <Route path='/sales/new' element={ <NewSalePage/> }/>
        </Routes>
    )
    :   <Navigate to={'/auth/login'}/>

}
