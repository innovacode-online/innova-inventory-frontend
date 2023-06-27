import { Card, CardActionArea, Typography, Grid, Box } from '@mui/material';
import { FC } from 'react';
import { Sale } from '../../interfaces';

interface Props {
    sale: Sale;
}

export const SaleCard: FC<Props> = ({ sale }) => {
    return (
        <Card>
            <Grid container>
                <Grid item xs={ 12 } md={ 4 }>
                    <Typography>Productos</Typography>
                    {
                        sale.products.map(product => (
                            <Typography>{ product.name }</Typography>
                        ))
                    }
                </Grid>
                <Grid item xs={ 12 } md={ 8 }>
                    <Typography>{ sale.client }</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
