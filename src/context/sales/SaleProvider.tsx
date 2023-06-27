import { FC, useEffect, useState } from 'react';
import { SaleContext } from '.';
import inventoryDb from '../../api/inventoryDb';
import { Sale } from '../../interfaces';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const SaleProvider:FC<PropsProvider> = ({ children }) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const [sales, setSales] = useState([] as Sale[]);

    const getAllSales = async (): Promise<void> => {
        try {
            if( !token ){
                return;
            }
            const { data:{ data } } = await inventoryDb.get('sales');
            setSales( data as Sale[] )
        } catch (error) {
            console.log(error);
        }        
    }

    useEffect(() => {
        getAllSales();
    }, [token])
    

    return (
        <SaleContext.Provider value={{
            sales
        }}>
            { children }
        </SaleContext.Provider>
    )
}