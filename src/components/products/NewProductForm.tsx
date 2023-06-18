import { useState, useContext, ChangeEvent } from 'react';
import { CategoryContext, ProductContext } from '../../context';

import { Button, FormControl, InputLabel, Select, TextField, MenuItem, SelectChangeEvent, Typography, Grid } from '@mui/material'

export const NewProductForm = () => {

    const { createProduct } = useContext( ProductContext );

    const { categories } = useContext( CategoryContext );
    const [newProduct, setNewProduct] = useState({ name:'', description:'', stock:0, category_id:'1'})
    const [image, setImage] = useState<any>(null)


    const handleForm = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value  });
    }

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setImage( file )
    };

    const handleSubmit = async () => {
        createProduct(image, newProduct);
    }

    return (
        <Grid
            container
            spacing={5}
            sx={{ 
                backgroundColor: 'info.main',
                maxWidth: '100%',
                margin:'auto',
                borderRadius: '10px',
                padding:'3rem 2rem'
            }}
        >
            <Grid item md={ 6 } sx={{ display:'grid', alignItems:'center', justifyContent:'center' }}>
                { image 
                    ? (
                        <>
                            <Typography variant='h2' mb={3} textAlign='center'>Imagen de producto</Typography>
                            <img alt="Preview" style={{ width:'50%', margin:'auto' }} src={URL.createObjectURL(image)} /> 
                        </>
                    )
                    : null 
                }
                <TextField type="file" margin='normal' name='image' onChange={handleFileChange}/>
            </Grid>
            <Grid item md={ 6 }>
                <TextField
                    margin='normal'
                    label='Nombre del producto'
                    type='text'
                    name='name'
                    onChange={(e) => handleForm(e)}
                />
                <TextField
                    label='Agrega una descripcion'
                    type='text'
                    name='description'
                    onChange={handleForm}
                />
                <TextField
                    label='Stock disponible'
                    type='number'
                    name='stock'
                    onChange={handleForm}
                />
                <TextField
                    label='Precio del producto'
                    type='number'
                    name='price'
                    onChange={handleForm}
                />
                <FormControl sx={{ display:'block' }}>
                    <InputLabel>Categoria</InputLabel>
                    <Select
                        value={ newProduct.category_id }
                        label="Categoria"
                        name='category_id'
                        onChange={(e) => handleForm(e)}
                    >
                        {
                            categories.map(category => (
                                <MenuItem key={ category.id } value={ category.id }>
                                    { category.name }
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Button sx={{ mt:3, width:'100%' }} onClick={handleSubmit}>Crear categoria</Button>
            </Grid>
        </Grid>
    )
}
