import { FC } from 'react'
import { MainLayout } from '../../layouts'
import { Typography } from '@mui/material';
import { NewProductForm } from '../../components';

export const NewProductPage: FC = () => {
    return (
        <MainLayout>
            <Typography variant='h1' mb={ 3 }>Crea un nuevo producto</Typography>
            <NewProductForm/>
        </MainLayout>
    )
}
