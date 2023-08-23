import { useState } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';

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

function App() {

  const [products, setProducts] = useState(initialProducts)

  const onClickAddProducts = (e, form) => {
    e.preventDefault();
    console.log(form);
}
  return (
    <>
      <div className="container-fliud">
        <div className="row text-center mb-5 mt-5">
            <div className="col-lg-7 mx-auto">
                <h1 className="display-4" style={{  fontWeight:'lighter'}}>Product Reducer</h1>
            </div>
        </div>
        <div className="row"  style={{ backgroundColor: '#000', padding:50}}>
            <AddProduct onClickAddProducts={(e, value)=>onClickAddProducts(e,value)}/>
            <ListProduct />
        </div>
          <div className='row p-5'>
            <Product products={products} />
        </div>
      </div>
    </>
  )
}

export default App
