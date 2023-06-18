import { FC } from 'react'

import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Box, Card, Grid, IconButton, Typography } from '@mui/material'


interface Props {

}

export const ProductItem: FC<Props> = ({  }) => {
    return (
        <Card sx={{ mb:3, padding:'2rem' }}>
            <Grid container spacing={3}>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Box
                        component='img'
                        src='https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SL1000_.jpg'
                        sx={{
                            width:{ xs:'100%', md:'60%' },
                            objectFit:'cover'
                        }}
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Producto:</Typography>
                    <Typography>IPhone 14 pro max</Typography>
                </Grid> 
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Categoria:</Typography>
                    <Typography>Telefono celulares</Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Precio</Typography>
                    <Typography>9000 Bs</Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Cantidad</Typography>
                    <Typography>5 disponibles</Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Acciones</Typography>
                    <Box>
                        <IconButton color='secondary'>
                            <IoEyeOutline/>
                        </IconButton>
                        <IconButton color='secondary'>
                            <AiOutlineEdit/>
                        </IconButton>
                        <IconButton color='secondary'>
                            <AiOutlineDelete/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Card>

    )
}
