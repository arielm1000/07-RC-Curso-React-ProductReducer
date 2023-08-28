import React from 'react'

export const ListProduct = ({products, deleteProducto, editProducto, edit} ) => {

  return (
    <div className="col-lg-8" >
        <table className="table mt-6" >
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">PRODUCTO</th>
                <th scope="col">PRECIO</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {products.map( (prd) => (
                <tr key={prd.id}>
                <th scope="row">{prd.id}</th>
                <td>{prd.title} </td>
                <td>{prd.price} </td>
                <td>
                    <button 
                        className='btn btn-info mx-2 btn-sm'
                        onClick={()=>editProducto(prd)}
                        disabled={edit!= true ? false : true}
                    >Editar</button>
                </td>
                <td>
                    <button 
                        className='btn btn-danger  btn-sm'
                        onClick={()=>deleteProducto(prd.id)}
                        disabled={edit!= true ? false : true}
                    >Eliminar</button>
                </td>
                </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}
