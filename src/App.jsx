import { useState, useReducer, useContext } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';
import { productReducer } from './reducers/productReducer';
import   useForm from './hooks/useForm';
import { AuthProvider } from './components/providers/AuthProvider';
import { AuthContext } from './components/contexts/AuthContext';
import { NavBar } from './components/admin/NavBar';
import { types} from '../src/types/types';
import { ProductContext } from './components/contexts/ProductContext';
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

  //const [products, setProducts] = useState(initialProducts)
  const [ products, dispatch ] = useReducer(productReducer, initialProducts);
  const {changeEdit, edit, productInit, form, onChangeForm} = useForm();
  //const { products }  = useContext(ProductContext);
  
 //const [user, setUser] = useState({isLogeed: false, name: null})
 const { state: user  } = useContext(AuthContext);
 //console.log(user)

  const onClickAddProducts = (e, form) => {
    e.preventDefault();
    console.log(form);

    const newProductObjets = {
      id: new Date().getTime(),
      title: form.title,
      category: form.category,
      price: form.price,
      description: form.description
    }
      //setProducts([...products, newProductObjets])
    dispatch({
        type: types.product.addType,
        payload : newProductObjets
    });
    const initProduct = {
      id: '',
      title: '',
      category: '',
      price: '',
      description: ''
    }
    productInit(initProduct);
    }
  const deleteProducto = (prdid)  => {
    //console.log(prdid);
    const resulDelete = products.filter((prd)=> prd.id != prdid);
    dispatch({
      type: types.product.deleteType,
      payload: resulDelete
    });
  }

  const editProducto = (prd) => {
    changeEdit();
    productInit(prd);
  }
  const saveEdit = (e) => {
    e.preventDefault();
    const resulEdit = products.map((prd) => { if (prd.id === form.id) {return form} else {return prd} } )
     dispatch({
      type: types.product.editType,
      payload : resulEdit
    });
    const initProduct = {
      id: '',
      title: '',
      category: '',
      price: '',
      description: ''
    }
    productInit(initProduct);
    changeEdit();
  }

  return (
    <>
      <div className="container-fliud">
        <div>
          <NavBar/>
        </div>
        <div className="row text-center mb-5 mt-5">
            <div className="col-lg-7 mx-auto">
                <h1 className="display-4" style={{  fontWeight:'lighter'}}>Product Reducer</h1>
            </div>
        </div>
        
        { user.isLogged && ( 
        <div className="row"  style={{ backgroundColor: '#000', padding:50}}>
            <AddProduct onClickAddProducts={(e, value)=>onClickAddProducts(e,value)} saveEdit={(e)=>saveEdit(e)} form={form} onChangeForm={onChangeForm} edit={edit}/>
            <ListProduct products={products} deleteProducto={deleteProducto} editProducto={editProducto} edit={edit}/>
        </div>
        )}
        <div className='row p-5'>
            <Product products={products} />
        </div>
      </div>
    </>
  )
}

export default App
