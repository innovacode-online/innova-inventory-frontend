import { FC } from 'react'
import { MainLayout } from '../../layouts'
import { PageHeader } from '../../components';

export const ProductsPage: FC = () => {
    return (
        <MainLayout>
            <PageHeader 
                path={'/products/new'} 
                textBtn={'Agregar producto'} 
                title={'Gestion de productos'}
            />
        </MainLayout>
    )
}
