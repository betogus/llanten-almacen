import React from 'react'

const Item = ({item}) => {
  return (
    
    <div className='item-cardContainer'>
        <div className='item-props'>
            <h4>{item.nombre}</h4>
            <p>precio por 100g: ${item.precio100gr}</p>
            <p>precio por Kg: ${item.precioKg}</p>
        </div>
        <div className='item-buttonContainer'>
        <i className="bi bi-chevron-compact-right"></i>
        </div>
    </div>
  )
}

export default Item