import React, {useRef, useState} from 'react'

export const AddProduct = ({onClickAddProducts}) => {
    
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null)
    const [form, setForm] = useState({});

    const onChangeForm = (value, field) => {
/*         console.log({
            ...form,
            [field]: value,
        });
 */        setForm({
            ...form,
            [field]: value,
        })

    }


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
                    onChange={(e)=>onChangeForm(e.target.value, descriptionRef.current.name)}
                    >
                </textarea>
            </div>
            <button className='btn btn-info' onClick={(e)=>onClickAddProducts(e, form)}>GUARDAR</button>
        </form>
    </div>
  )
}
