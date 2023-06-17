import { FC } from 'react'
import { MainLayout } from '../../layouts'
import { PageHeader } from '../../components'

export const SalesPage: FC = () => {
    return (
        <MainLayout>
            <PageHeader 
                path={'/sales/new'} 
                textBtn={'Nueva venta'} 
                title={'Listado de ventas'}
            />
        </MainLayout>
    )
}
