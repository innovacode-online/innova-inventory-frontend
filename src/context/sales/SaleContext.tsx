import { createContext } from 'react'
import { Sale } from '../../interfaces';

interface ContextProps {
    sales: Sale[];
}

export const SaleContext = createContext( {} as ContextProps );