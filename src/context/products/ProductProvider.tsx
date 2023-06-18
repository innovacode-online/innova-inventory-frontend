import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '.';

import inventoryDb from '../../api/inventoryDb';
import { Product } from '../../interfaces';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const ProductProvider:FC<PropsProvider> = ({ children }) => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([] as Product[]);
    const [product, setProduct] = useState({} as Product);
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

    const getProductBySlug = async (slug: string): Promise<void> => {
        try {
            setIsLoading( true )
            const { data } = await inventoryDb.get(`/products/${ slug }`)
            setProduct( data[0] )
            setIsLoading( false )
        } catch (error) {
            console.log(error);
        } finally {
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
            await inventoryDb.post('/products', {...product, image: imageUrl} );
            getAllProducts();
            navigate('/products')
        } catch (error) {
            console.log(error);
        }
        
    }

    const deleteProductById = async (id: number): Promise<void> => {
        try {
            await inventoryDb.delete(`/products/${ id }`);
            getAllProducts();
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
                product,

                createProduct,
                deleteProductById,
                getProductBySlug
            }}
        >
            { children }
        </ProductContext.Provider>
    )
}