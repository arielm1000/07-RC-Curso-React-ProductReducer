import { useState, useReducer, useContext } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';
import { productReducer } from './reducers/productReducer';
import { AuthProvider } from './components/providers/AuthProvider';
import { AuthContext } from './components/contexts/AuthContext';
import { NavBar } from './components/admin/NavBar';
import { types} from '../src/types/types';
import { ProductContext } from './components/contexts/ProductContext';

function App() {

  //const [products, setProducts] = useState(initialProducts)
  //const [ products, dispatch ] = useReducer(productReducer, initialProducts);
  const { products }  = useContext(ProductContext);
  
  const [editProd, setEditProd] = useState();
  const [edit, setEdit] = useState(false);
 //const [user, setUser] = useState({isLogeed: false, name: null})
 const { state: user  } = useContext(AuthContext);
 //console.log(user)

  const onClickAddProducts = (e, form) => {
    e.preventDefault();
    console.log(form);
    if(edit!=true) {
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

      setEditProd({
        id: '',
        title: '',
        category: '',
        price: '',
        description: ''
      });
      setEdit(new Date().getTime());
  } else {
      const resulEdit = products.map((prd) => { if (prd.id === form.id) {return form} else {return prd} } )
      //console.log(resulEdit)
      dispatch({
        type: types.product.editType,
        payload : resulEdit
      });
      setEditProd({
        id: '',
        title: '',
        category: '',
        price: '',
        description: ''
      });
      setEdit(false);

  }
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
    //console.log(prd);
    setEditProd(prd);
    setEdit(true);
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
            <AddProduct onClickAddProducts={(e, value)=>onClickAddProducts(e,value)} editProd={editProd} edit={edit} />
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
