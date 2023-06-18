import { FC, useContext } from 'react'
import { CategoryContext } from '../../context'

import { MainLayout } from '../../layouts'
import { CategoryCard, LoadingView, PageHeader } from '../../components'

export const CategoriesPage: FC = () => {

    const { isLoading, categories } = useContext( CategoryContext );


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
                path={'/categories/new'} 
                textBtn={'Agregar categoria'} 
                title={'Gestion de categorias'}
            />
            {
                categories?.map( category => (
                    <CategoryCard key={ category.id } category={ category }/>
                )) 
            }
        </MainLayout>
    )
}
