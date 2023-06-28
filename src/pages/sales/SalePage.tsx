import { FC, useContext, useEffect } from 'react'
import { MainLayout } from '../../layouts'
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { SaleContext } from '../../context';
import { LoadingView } from '../../components';

export const SalePage: FC = () => {
    const { getSaleById, sale, isLoading } = useContext(SaleContext)
    const { id } = useParams();
    

    useEffect(() => {
        getSaleById( +id! );
    }, [])
    
    if( isLoading ){
        return (
            <LoadingView/>
        )
    }

    return (
        <MainLayout>
            
            <Grid 
                container
                sx={{ 
                    backgroundColor: 'info.main',
                    margin:'auto',
                    maxWidth:'950px',
                    borderRadius: '10px',
                    padding:'3rem 2rem',
                    mb:10
                }}
            >
                <Grid item xs={ 12 } md={ 6 }>
                    {
                        sale.details?.map(({product, amount}) => (
                            <>
                                <Box 
                                    key={ product.id }
                                    sx={{
                                        display:'flex',
                                        gap:'2rem',
                                        textAlign:'start',
                                        alignItems:'center',
                                        mb:4
                                    }}
                                >
                                    <Box 
                                        component='img'
                                        src={`https://innova-inventory-backend-production.up.railway.app${ product.image }`}
                                        sx={{ maxWidth:'100px' }}
                                    />
                                    <Box>
                                        <Typography variant='h2'>Producto: </Typography>
                                        <Typography mb={ 2 }>{ product.name }</Typography>
                                        
                                        <Typography variant='h2'>Precio: </Typography>
                                        <Typography mb={ 2 }>{ product.price }Bs</Typography>
                                        
                                        <Typography variant='h2'>Cantidad: </Typography>
                                        <Typography>{ amount } unidades</Typography>
                                    </Box>
                                </Box>
                                <Divider/>
                            </>
                        ))
                    }
                </Grid>
                <Grid item xs={ 12 } md={ 6 } sx={{ textAlign:'start' }}>
                    <Typography variant='h1' mb={ 3 }>Datos del cliente: </Typography>
                    <Typography variant='h2'>Cliente: </Typography>
                    <Typography >{ sale.client }</Typography>
                    
                    <Divider/>
                    
                    <Typography variant='h2'>Fecha de venta: </Typography>
                    <Typography >{ sale.createdAt }</Typography>
                    
                    <Divider/>
                    
                    <Typography variant='h2'>Total pagaado: </Typography>
                    <Typography >{ sale.total }Bs</Typography>
                </Grid>
            </Grid>            
        </MainLayout>
    )
}
