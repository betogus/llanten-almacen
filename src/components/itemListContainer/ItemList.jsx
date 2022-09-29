import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
    <div className='d-flex flex-shrink-1' style={{maxWidth: "100vw", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        {items.map((item) => <Item item={item} key={item.id}/> )}
    </div>
  )
}

export default ItemList