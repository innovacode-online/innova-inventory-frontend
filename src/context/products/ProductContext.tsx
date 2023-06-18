import { createContext } from 'react'
import { Product } from '../../interfaces';

interface ContextProps {
    products: Product[];
    product: Product;
    isLoading: boolean;

    createProduct: (image: any, product: { name:string, description:string, stock:number, category_id:string, price:string }) => Promise<void>;
    deleteProductById: (id: number) => Promise<void>;
    getProductBySlug: (slug: string) => Promise<void>;
}

export const ProductContext = createContext( {} as ContextProps );