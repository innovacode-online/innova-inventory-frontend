import { createContext } from 'react'
import { Category } from '../../interfaces';

interface ContextProps {
    isLoading:  boolean;
    categories: Category[];
    
    createCategory: (name: string, slug: string) => Promise<void>;
    deleteCategory: (id: number) => Promise<void>;
}

export const CategoryContext = createContext( {} as ContextProps );