import {FormEvent, useContext, useState} from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"
import { AuthContext } from '../../context';


export const FormLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (e: FormEvent) => {
        console.log({email, password});
        e.preventDefault();
        loginUser(email, password);
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                background:'#fff',
                borderRadius:'10px',
                padding:'3rem 2rem',
                textAlign:'center'
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
            <Button type='submit' sx={{ width:'100%' }} size='large'>Iniciar Sesion</Button>
        </Box>
    )
}
