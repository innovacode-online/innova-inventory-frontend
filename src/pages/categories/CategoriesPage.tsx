import { FC } from 'react'
import { MainLayout } from '../../layouts'
import { PageHeader } from '../../components'

export const CategoriesPage: FC = () => {
    return (
        <MainLayout>
            <PageHeader 
                path={'/categories/new'} 
                textBtn={'Agregar categoria'} 
                title={'Gestion de categorias'}
            />
        </MainLayout>
    )
}
