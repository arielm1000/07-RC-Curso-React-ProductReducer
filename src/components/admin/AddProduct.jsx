import React, {useRef, useState, useEffect} from 'react';
import useForm from '../../hooks/useForm';
const data = {
    id: 'sku-0004',
    title: 'Galaxy A28 5g',
    category: 'Celulares',
    price: '$100.000',
    description: 'Celular 5g con, 4 Camaras, 27mp'
  }

export const AddProduct = ({onClickAddProducts, form, onChangeForm, edit, saveEdit}) => {
    
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null)
    // const [form, setForm] = useState({});

    // const onChangeForm = (value, field) => {
    //    setForm({
    //         ...form,
    //         [field]: value,
    //     })
    // }
    //const {form, onChangeForm} = useForm(editProd, edit);

  return (

    <div className="col-lg-4" >
        <form>
            <div className="mb-3">
                <input 
                    ref={titleRef}
                    type="text" 
                    className="form-control"  
                    placeholder="Titulo del  Producto"
                    name='title'
                    value={form.title  || ''}
                    onChange={(e)=>onChangeForm(e.target.value, titleRef.current.name)}
                />
            </div>
            <div className="mb-3">
                <input 
                    ref={categoryRef}
                    type="text" 
                    className="form-control"  
                    placeholder="Categoria"
                    name='category'
                    value={form.category  || ''}
                    onChange={(e)=>onChangeForm(e.target.value, categoryRef.current.name)}
                />
            </div>
            <div className="mb-3">
                <input 
                    ref={priceRef}
                    type="text" 
                    className="form-control" 
                    placeholder="Precio"
                    name='price'
                    value={form.price  || ''}
                    onChange={(e)=>onChangeForm(e.target.value, priceRef.current.name)} 
                />
            </div>
            <div className="mb-3">
                <textarea 
                    ref={descriptionRef}
                    className="form-control" 
                    rows="3" 
                    placeholder='Descripcion del producto'
                    name='description'
                    value={form.description  || ''}
                    onChange={(e)=>onChangeForm(e.target.value, descriptionRef.current.name)}
                    >
                </textarea>
            </div>
            <button className='btn btn-info' onClick={!edit ? (e)=>onClickAddProducts(e, form):(e)=>saveEdit(e)}>GUARDAR</button>
        </form>
    </div>
  )
}
