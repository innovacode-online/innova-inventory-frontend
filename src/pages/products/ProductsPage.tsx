import { FC, useContext } from 'react'
import { MainLayout } from '../../layouts'
import { LoadingView, PageHeader, ProductItem } from '../../components';
import { ProductContext } from '../../context';

export const ProductsPage: FC = () => {

    const { products, isLoading } = useContext( ProductContext )
    if( isLoading ){
        return (
            <MainLayout>
                <LoadingView/>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <PageHeader 
                path={'/products/new'} 
                textBtn={'Agregar producto'} 
                title={'Gestion de productos'}
            />
            {
                products.map( product => (
                    <ProductItem key={ product.id } product={ product }/>
                ))
            }
        </MainLayout>
    )
}
