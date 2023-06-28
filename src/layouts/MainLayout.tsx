import React, { FC } from 'react'
import { Navbar } from '../components'
import { Box } from '@mui/material'

interface Props{
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Box sx={{ 
            position:'relative',
            overflow:'hidden'
        }}>
            {/* APPBAR */}
            <Navbar/>

            {/* SIDEMENU */}
            {/* MAIN */}
            <Box
                component='main'
                sx={{
                    maxWidth:{ xs:'95%', md:'80%' },
                    margin:'0 auto',
                    padding:'2rem 0',
                }}
            >
                { children }
            </Box>
        </Box>
    )
}
