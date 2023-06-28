import { FC, useContext } from 'react'

import { DASHBOARD_MENU } from '../../constants';
import { AppBar, Box, Button, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export const Navbar: FC = () => {
    const { logout } = useContext( AuthContext )
    const navigate = useNavigate();
    
    const handleNavigation = ( path: string ) => {
        navigate( path )
    }


    return (
        <AppBar>
            <Toolbar>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Box component='img' src='../../../public/images/logo-innova-inventory.png' sx={{ maxWidth:'200px' }} />
                    {/* <Typography variant='h6'>Innova</Typography> */}
                    {/* <Typography sx={{ ml: 0.5 }}>Inventory</Typography> */}
                </Box>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <List sx={{ display:'flex' }}>
                        {
                            DASHBOARD_MENU.map(item => (
                                <ListItem
                                    key={ item.path }
                                    onClick={() => handleNavigation( item.path )}
                                >
                                    <ListItemText sx={{ cursor:'pointer' }} primary={ item.name }/>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>

                <Box flex={1} />
                <Button onClick={ logout }>
                    Cerrar sesion
                </Button>
            </Toolbar>
        </AppBar>
    )
}
