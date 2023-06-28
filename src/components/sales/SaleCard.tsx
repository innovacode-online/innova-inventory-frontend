import { FC } from 'react';
import { Sale } from '../../interfaces';

import { Card, Typography, Grid, List, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatearFecha } from '../../helpers';

interface Props {
    sale: Sale;
}

export const SaleCard: FC<Props> = ({ sale }) => {

    const navigate = useNavigate();

    return (
        <Card sx={{ padding:'2rem', mb:'1rem' }}>
            <Grid container>
                <Grid item xs={ 12 } md={ 4 }>
                    <Typography variant='h2'>Venta #{ sale.id }</Typography>
                    <Typography mb={ 3 }>Fecha: { formatearFecha( sale.createdAt ) }</Typography>
                    <Typography variant='h2'>Productos</Typography>
                    <List>
                        {
                            sale.details.map(({product}) => (
                                <Typography key={ product.id }>
                                   - { product.name } 
                                </Typography>
                            ))
                        }
                    </List>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <Typography variant='h2'>Cliente:</Typography>
                    <Typography mb={ 3 }>{ sale.client }</Typography>

                    <Typography variant='h2'>Total:</Typography>
                    <Typography>{ sale.total }Bs</Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                    <Button onClick={() => navigate(`/sales/${ sale.id }`)}>Ver detalles</Button>
                </Grid>
            </Grid>
        </Card>
    )
}
