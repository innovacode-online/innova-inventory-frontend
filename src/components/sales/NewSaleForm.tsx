import { FC, useContext, useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material';
import { SaleContext } from '../../context';
import { ProductCartList } from '.';

export const NewSaleForm: FC = () => {
    const { cart, total, createNewSale } = useContext(SaleContext);

    const [client, setClient] = useState('')

    return (
        <Box>
            <TextField
                name='client'
                type='text'
                label='Nombre de cliente'
                value={client}
                onChange={(e) => setClient( e.target.value )}

            />
            <Typography sx={{ textAlign:'center' }} variant='h2'>Carrito</Typography>         
            {
                cart.length === 0
                
                ? <Typography sx={{ textAlign:'center' }}>El carrito esta vacio</Typography>
                
                : cart.map(({ product, amount }) => (      
                    <ProductCartList key={ product.id } product={ product } amount={ amount }/>
                )) 
                

            }   
            <Typography variant='h2' textAlign='end' mt={5}>Total: { total }Bs</Typography>    
            <Button onClick={() => createNewSale( client )}>Generar Venta</Button>        
        </Box>
    )
}
