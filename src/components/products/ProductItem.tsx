import { FC, useContext } from 'react'
import { Product } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context';

import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Box, Card, Grid, IconButton, Typography } from '@mui/material'


interface Props {
    product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {

    const { deleteProductById } = useContext(ProductContext)
    const navigate = useNavigate();

    

    return (
        <Card sx={{ mb:3, padding:'2rem' }}>
            <Grid container spacing={3}>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Box
                        component='img'
                        src={`http://127.0.0.1:8000${ product.image }`}
                        sx={{
                            width:{ xs:'100%', md:'60%' },
                            objectFit:'cover'
                        }}
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Producto:</Typography>
                    <Typography>{ product.name }</Typography>
                </Grid> 
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Categoria:</Typography>
                    <Typography>{ product.category.name }</Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Precio</Typography>
                    <Typography>{ product.price } Bs</Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Cantidad</Typography>
                    <Typography>{ product.stock } disponibles</Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Acciones</Typography>
                    <Box>
                        <IconButton color='secondary' onClick={() => navigate(`/products/${ product.slug }`)}>
                            <IoEyeOutline/>
                        </IconButton>
                        <IconButton color='secondary'>
                            <AiOutlineEdit/>
                        </IconButton>
                        <IconButton color='secondary' onClick={() => deleteProductById( product.id )}>
                            <AiOutlineDelete/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Card>

    )
}
