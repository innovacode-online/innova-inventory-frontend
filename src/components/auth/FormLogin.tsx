import {useState} from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"


export const FormLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <Box
            sx={{
                background:'#fff',
                borderRadius:'10px',
                padding:'2rem'
            }}
        >
            <Typography variant="h1" mb={ 4 }>Inicia sesion</Typography>
            <TextField
                label='Correo'
                type="email"
                name="email"
                value={ email }
                onChange={(e) => setEmail( e.target.value )}
            />
            <TextField
                label='Contraseña'
                type="password"
                name="password"
                value={ password }
                onChange={(e) => setPassword( e.target.value )}
            />
            <Button>Iniciar Sesion</Button>
        </Box>
    )
}
