import { FC, useContext } from 'react'

import { Box, Typography, TextField, Button } from '@mui/material';
import { Product } from '../../interfaces'
import { SaleContext } from '../../context';

interface Props {
    product: Product;
    amount: number
}

export const ProductCartList: FC<Props> = ({ product, amount }) => {

    const { amountModify } = useContext(SaleContext);

    return (
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
            <Box display='flex' justifyContent='space-between' width='100%'>
                <Box>

                    <Typography variant='subtitle1'>{ product.name }</Typography>
                    <Typography variant='subtitle2'>Precio: { product.price }Bs</Typography>
                </Box>
                <TextField
                    type='number'
                    
                    sx={{ maxWidth: '70px' }}
                    value={ amount }
                    onChange={ (e) => amountModify( product, e.target.value )}
                />
            </Box>
            <Button color='secondary'>Remover</Button>
        </Box>
    )
}
