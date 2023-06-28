import { FC, useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@mui/material'

interface Props{
    type: 'success' | 'error';
    isError: {
        hasError: boolean;
        message: string;
    }
}

export const Toast:FC<Props> = ({ type, isError }) => {

    const [right, setRight] = useState('-100rem')
    

    useEffect(() => {
        setRight('1rem')

        setTimeout(() => {
            setRight('-100rem')
        },5000)
    }, [ isError ])
    
    if( !isError.hasError ){
        return;
    }

    return (
        <Box
            sx={{
                borderRadius:'7px',
                padding:'1rem',
                position:'absolute',
                width:'max-content',
                zIndex:'2',
                top:'1rem',
                right,
                textAlign:'center',
                backgroundColor: type == 'success' ? '#33eb91' : '#dc2626' ,
                transition:'all .3s ease-in-out',
            }}
        >
            <Typography color='#fff'>{ isError.message }</Typography>
        </Box>    
    )
}
