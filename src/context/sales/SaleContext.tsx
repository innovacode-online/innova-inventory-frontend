import { createContext } from 'react'
import { Product, Sale, Cart } from '../../interfaces';

interface ContextProps {
    sale: Sale;
    cart: Cart[];
    sales: Sale[];
    total: number;
    isLoading: boolean;
    isError: {
        hasError: boolean;
        message: string;
    }
    
    createNewSale    : (client: string) => Promise<void>;
    getSaleById      : (id: number) => Promise<void>;
    addProductToCart : (product: Product) => void;
    amountModify     : (product: Product, value: string) => void;
}

export const SaleContext = createContext( {} as ContextProps );