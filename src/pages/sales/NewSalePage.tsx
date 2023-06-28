import { FC, useContext } from 'react'
import { MainLayout } from '../../layouts'
import { Box, Button, Grid, Typography } from '@mui/material';
import { ProductContext, SaleContext } from '../../context'
import { NewSaleForm, Toast } from '../../components';

export const NewSalePage: FC = () => {
    const { products } = useContext(ProductContext);
    const { addProductToCart, isError } = useContext(SaleContext);



    return (
        <MainLayout>
            <Toast type={'error'} isError={ isError }/>
            <Grid
                container
                sx={{ 
                    backgroundColor: 'info.main',
                    margin:'auto',
                    borderRadius: '10px',
                    padding:'3rem 2rem',
                    mb:10
                }}
            >
                <Grid item xs={ 12 } md={ 5 }>
                    {/* MOSTRAR LISTADO DE PRODUCTOS */}
                    <Typography variant='h1' mb={ 4 }>Productos</Typography>

                    {
                        products.map(product => (
                            <Box 
                                key={ product.id }
                                sx={{
                                    display:'flex',
                                    gap:'2rem',
                                    textAlign:'start',
                                    alignItems:'center',
                                    mb:5
                                }}
                            >
                                <Box
                                    component='img'
                                    src={`https://innova-inventory-backend-production.up.railway.app${ product.image }`}
                                    sx={{
                                        width:'100%',
                                        maxWidth:'100px',
                                        objectFit:'cover'
                                    }}
                                />
                                <Box>
                                    <Typography variant='subtitle1'>{ product.name }</Typography>
                                    <Typography variant='subtitle2'>Precio: { product.price }Bs</Typography>
                                    <Typography variant='subtitle2'>Stock: { product.stock }</Typography>
                                    <Button 
                                        variant='outlined' 
                                        sx={{color: 'primary.main'}}
                                        onClick={() => addProductToCart( product )}
                                    >
                                        Agregar al carrito
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }
                </Grid>
                <Grid item xs={ 12 } md={ 7 }>
                    <Typography variant='h1' mb={ 4 }>Detalles de nueva venta</Typography>
                    <NewSaleForm/>
                </Grid>

            </Grid>

        </MainLayout>
    )
}
