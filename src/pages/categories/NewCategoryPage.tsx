import { FC } from 'react'
import { MainLayout } from '../../layouts'
import { Typography } from '@mui/material';
import { NewCategoryForm } from '../../components/categories/NewCategoryForm';

export const NewCategoryPage: FC = () => {
    return (
        <MainLayout>
            <Typography variant='h1' mb={ 3 }>Crea una nueva categoria</Typography>
            <NewCategoryForm/>
        </MainLayout>
    )
}
