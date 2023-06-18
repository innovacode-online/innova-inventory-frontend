import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from "./";

import inventoryDb from '../../api/inventoryDb';
import { Category } from '../../interfaces';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const CategoryProvider:FC<PropsProvider> = ({ children }) => {
    const [categories, setCategories] = useState([] as Category[]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const getAllCategories = async () => {
        setIsLoading( true )
        try {
            const { data } = await inventoryDb.get('/categories');
            setCategories( data )
            setIsLoading( false )            
        } catch (error) {
            console.log(error);
        }finally {
            setIsLoading(false)
        }
    }

    const createCategory = async ( name:string, slug: string ): Promise<void> => {
        try {
            const data = await inventoryDb.post('/categories', {
                name,
                slug
            });
            console.log(data);
            navigate('/categories')
        } catch (error) {
            console.log(error);
        } finally{
            getAllCategories();
        }
    }

    const deleteCategory = async ( id:number ): Promise<void> => {
        try {
            const data = await inventoryDb.delete(`/categories/${ id }`)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        getAllCategories();
    }

    useEffect(() => {
        getAllCategories();
    }, [])
    

    return (
        <CategoryContext.Provider 
            value={{
                categories,
                isLoading,
                
                // METODOS
                createCategory, 
                deleteCategory
            }}
        >
            { children }
        </CategoryContext.Provider>
    )
}