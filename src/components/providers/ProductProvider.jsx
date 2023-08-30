import React, { useReducer } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { productReducer } from '../../reducers/productReducer'
const initialProducts = [
    {
      id: 'sku-0001',
      title: 'Galaxy AS3',
      category: 'Celulares',
      price: '$120.000',
      description: 'Celular 5g con doble pantalla y 4 camaras'
    },
    {
      id: 'sku-0002',
      title: 'Galaxy A13',
      category: 'Celulares',
      price: '$80.000',
      description: 'Celular 5g con, 3 Camaras'
    },
    {
      id: 'sku-0003',
      title: 'Galaxy A22 5g',
      category: 'Celulares',
      price: '$98.000',
      description: 'Celular 5g con, 4 Camaras, 27mp'
    },
    {
      id: 'sku-0004',
      title: 'Galaxy A28 5g',
      category: 'Celulares',
      price: '$100.000',
      description: 'Celular 5g con, 4 Camaras, 27mp'
    }
  ]
  
export const ProductProvider = ( {children} ) => {
    const [ products, dispatch ] = useReducer(productReducer, initialProducts);
  return (
    <ProductContext.Provider    value={{ 
        products
        }}
    >
            { children }
    </ProductContext.Provider>
    )
}
