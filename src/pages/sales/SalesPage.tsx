import { FC, useContext } from 'react'
import { MainLayout } from '../../layouts'
import { PageHeader, SaleCard } from '../../components'
import { SaleContext } from '../../context'

export const SalesPage: FC = () => {

    const { sales } = useContext(SaleContext);

    return (
        <MainLayout>
            <PageHeader 
                path={'/sales/new'} 
                textBtn={'Nueva venta'} 
                title={'Listado de ventas'}
            />
            {
                sales.map(sale => (
                    <SaleCard key={ sale.id } sale={ sale }/>
                ))
            }
        </MainLayout>
    )
}
