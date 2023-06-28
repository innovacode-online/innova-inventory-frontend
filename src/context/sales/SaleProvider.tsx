import { FC, useEffect, useState, useContext } from 'react';
import inventoryDb from '../../api/inventoryDb';

import { SaleContext } from '.';
import { AuthContext } from '../auth/AuthContext';
import { Product, Sale, Cart } from '../../interfaces';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const SaleProvider:FC<PropsProvider> = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('AUTH_TOKEN');

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({hasError: false, message: ''})


    const [sales, setSales] = useState([] as Sale[]);
    const [sale, setSale] = useState({} as Sale);

    const [cart, setCart] = useState([] as Cart[]);
    const [total, setTotal] = useState(0);


    const getAllSales = async (): Promise<void> => {
        try {
            if( !token ){
                return;
            }
            const { data:{ data } } = await inventoryDb.get('/sales', { headers:{ Authorization: `Bearer ${ token }`} });
            setSales( data as Sale[] )
        } catch (error) {
            console.log(error);
        }        
    }

    const getSaleById = async (id:number): Promise<void> => {
        setIsLoading( true );
        const { data: { data } } = await inventoryDb.get(`/sales/${ id }`, { headers:{ Authorization: `Bearer ${ token }`} });
        setSale( data as Sale )
        setIsLoading( false );

    } 

    const addProductToCart = ( product: Product ) => {
        const cartValidate = cart.findIndex(item => item.product.id === product.id )

        if( cartValidate != -1 ){
            alert('El producto ya se encuentra en el carrito')
            return;
        }

        setCart([...cart, {product, amount:1 }])
    }

    const amountModify = (product: Product, value: string) => {
        if( +value > product.stock || +value < 1 ){
            return;
        }
        const cartUpdate = cart.map((item) => item.product.id === product.id ? { ...item, amount: +value } : item )
        setCart( cartUpdate )
    }

    const calculateTotal = () => {
        let totalAux = 0
        cart.map((item) => totalAux += item.product.price * item.amount)
        setTotal(totalAux)
    }

    const createNewSale = async (client: string): Promise<void> => {

        if( client.trim() === '' ){
            setIsError({
                hasError: true,
                message:'El nombre del cliente es obligatorio'
            })
            return;
        }

        try {
            const newSale = {
                client,
                total,
                products: cart.map(item =>{ 
                    return {
                        id: item.product.id,
                        amount: item.amount, 
                    }
                })
            }
            await inventoryDb.post('/sales', newSale )
            navigate('/sales')
            alert('Venta generada con exito')
        } catch (error) {
            console.log(error);
            if ( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message:error.response?.data.message
                })
            }
        }
    } 


    useEffect(() => {
        getAllSales();
    }, [user])
    
    useEffect(() => {
        calculateTotal();
    }, [cart])
    

    return (
        <SaleContext.Provider value={{
            sales,
            sale,
            isLoading,
            cart,
            total,
            isError,

            getSaleById,
            addProductToCart,
            amountModify,
            createNewSale
        }}>
            { children }
        </SaleContext.Provider>
    )
}