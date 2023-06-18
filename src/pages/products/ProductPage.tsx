import { FC, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../../context';

import { MainLayout } from '../../layouts';
import { LoadingView } from '../../components';
import { Box, Button, Typography } from '@mui/material';

export const ProductPage: FC = () => {
    const { getProductBySlug, product, isLoading } = useContext(ProductContext)
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductBySlug(slug!);
    }, [])
    
    if( isLoading ){
        return (
            <MainLayout>
                <LoadingView/>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <Box
                sx={{ 
                    backgroundColor: 'info.main',
                    maxWidth: '650px',
                    margin:'auto',
                    borderRadius: '10px',
                    padding:'3rem 2rem',
                    textAlign:'center'
                }}
            >

                <Box component='img' maxWidth='350px' height='auto' src={`http://127.0.0.1:8000${ product.image }`} />
                <Box mb={ 2 }>
                    <Typography variant='h2'>ID: { product.id }</Typography>
                </Box>
                <Box mb={ 2 }>
                    <Typography>Nombre del producto:</Typography>
                    <Typography variant='h1'>{ product.name }</Typography>
                </Box>


                <Box mb={ 2 }>
                    <Typography>Description:</Typography>
                    <Typography variant='subtitle1'>{ product.description }</Typography>
                </Box>
                
                <Box mb={ 2 }>
                    <Typography>Precio:</Typography>
                    <Typography variant='h2'>{ product.price }Bs</Typography>
                </Box>
                <Box mb={ 2 }>
                    <Typography>Cantidad disponible:</Typography>
                    <Typography variant='h2'>{ product.stock }</Typography>
                </Box>
                <Button onClick={() => navigate(-1)}>Volver</Button>
            </Box>
        </MainLayout>
    )
}
