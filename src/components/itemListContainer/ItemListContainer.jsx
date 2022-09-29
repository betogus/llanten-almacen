import React, { useEffect, useState } from "react";
import productos from '../../productos.json'
import ItemList from "./ItemList";

const ItemListContainer = ({title}) => {

  const [items, setItems] = useState([])
  
  useEffect(()=>{
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
    getData.then(res => setItems(res))
  },[])

  
 

  return (
    <div className="text-center">
      <h1>{title}</h1>
      <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer;
