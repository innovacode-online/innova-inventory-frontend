import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoPlus } from 'react-icons/go';
import { Box, Button, Typography } from '@mui/material';

interface Props{
    path:   string;
    textBtn:string;
    title:  string;
}

export const PageHeader: FC<Props> = ({ path, textBtn, title }) => {
    
    const navigate = useNavigate();
    
    const handleNavigation = () => {
        navigate(path);
    }

    return (
        <Box display='flex' justifyContent='space-between'>
            <Typography variant='h1'>{ title }</Typography>
            <Button
                onClick={handleNavigation}
            >
                { textBtn }
                <GoPlus/>    
            </Button>
        </Box>
    )
}
