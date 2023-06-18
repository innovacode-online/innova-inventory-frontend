import { Box, CircularProgress } from '@mui/material'

export const LoadingView = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight:'70vh',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <CircularProgress/>
        </Box>
    )
}
