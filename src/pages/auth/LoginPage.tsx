import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { FormLogin } from '../../components'
import { bgAuthPages } from '../../constants'

export const LoginPage: FC = () => {
    return (
        <Box component='main'>
            <Grid container>
                <Grid item xs={ 12 } md={ 6 }
                    sx={{
                        background: bgAuthPages,
                        minHeight:'100vh',
                        display:{xs:'none',md:'flex'},
                        justifyContent:'center',
                        
                    }}
                >
                    <Box component='img' src='../../../public/images/logo-innova-inventory.png' sx={{ bgcolor:'#fff', maxWidth:'500px', width:'100%', borderRadius:'2rem' }} />
                </Grid>
        
                <Grid 
                    item xs={ 12 } md={ 6 }
                    sx={{ 
                        padding:'3rem',
                        background: {xs:bgAuthPages, md:'none'},
                        minHeight:'100vh',
                        display:'flex',
                        justifyContent:'center',
                    }}
                >
                    {/* FORMULARIO */}
                    <FormLogin/>
                </Grid>
            </Grid>
        </Box>
    )
}
