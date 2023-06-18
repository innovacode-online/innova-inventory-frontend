import React, { FC, useContext, useState} from 'react'

import { Box, Button, FormControl, TextField } from '@mui/material'
import { CategoryContext } from '../../context'

export const NewCategoryForm: FC = () => {

    const { createCategory } = useContext( CategoryContext )
    const [newCategory, setNewCategory] = useState({ name:'', slug:'' })

    const handleForm = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewCategory({...newCategory, [e.target.name]: e.target.value  });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createCategory( newCategory.name , newCategory.slug );
    }

    return (
        <>
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{ 
                    backgroundColor: 'info.main',
                    maxWidth: '550px',
                    margin:'auto',
                    borderRadius: '10px',
                    padding:'3rem 2rem'
                }}
            >
                <FormControl>
                    <TextField
                        label='Nombre de la categoria'
                        type='text'
                        name='name'
                        onChange={(e) => handleForm(e)}
                    />
                    <TextField
                        label='Slug'
                        type='text'
                        name='slug'
                        onChange={handleForm}
                    />
                    <Button type='submit'>Crear categoria</Button>
                </FormControl>
            </Box>
        </>
    )
}
