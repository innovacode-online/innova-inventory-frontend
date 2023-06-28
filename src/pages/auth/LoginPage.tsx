import { Box, Grid, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { FormLogin, Toast } from '../../components'
import { bgAuthPages } from '../../constants'
import { AuthContext } from '../../context'

export const LoginPage: FC = () => {
    const { isError } = useContext(AuthContext)
    return (
        <Box component='main' overflow='hidden' position='relative'>
            <Toast type={'error'} isError={ isError }/>
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
