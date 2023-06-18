import { FC, useState, useEffect } from 'react';
import { ProductContext } from '.';

import inventoryDb from '../../api/inventoryDb';
import { Product } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const ProductProvider:FC<PropsProvider> = ({ children }) => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([] as Product[]);
    const [isLoading, setIsLoading] = useState(false)


    const getAllProducts = async (): Promise<void> => {
        try {
            
            setIsLoading( true )
            const { data: { data } } = await inventoryDb.get('products');
            setProducts( data );

        } catch (error) {
            
            console.log(error);
        
        } finally{
            setIsLoading( false )
        }
    }

    const createProduct = async (image: any, product:{ name:string, description:string, stock:number, category_id:string, price:string}): Promise<void> => {
        console.log(product);
        try {
            //? UPLOAD IMAGE
            const formData = new FormData();
            formData.append("image", image);
            const {data: imageUrl} = await inventoryDb.post('/upload', formData )
            
            //? UPLOAD PRODUCT
            const { data } = await inventoryDb.post('/products', {...product, image: imageUrl} );
            getAllProducts();
            navigate('/products')
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getAllProducts();
    }, [])
    


    return (
        <ProductContext.Provider 
            value={{
                products,
                isLoading,
                createProduct
            }}
        >
            { children }
        </ProductContext.Provider>
    )
}