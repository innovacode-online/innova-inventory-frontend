import { FC } from 'react'

import { DASHBOARD_MENU } from '../../constants';
import { AppBar, Box, Button, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const Navbar: FC = () => {
    const navigate = useNavigate();

    const handleNavigation = ( path: string ) => {
        navigate( path )
    }


    return (
        <AppBar>
            <Toolbar>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant='h6'>Innova</Typography>
                    <Typography sx={{ ml: 0.5 }}>Inventory</Typography>
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
                <Button>
                    Cerrar sesion
                </Button>
            </Toolbar>
        </AppBar>
    )
}
