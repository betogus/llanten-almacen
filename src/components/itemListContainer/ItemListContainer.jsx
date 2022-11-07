import '@firebase/auth'

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useDispatch, useSelector } from "react-redux";

import ItemList from "./ItemList";
import MisPedidos from "../MisPedidos/MisPedidos";
import Skeletons from "../skeleton/Skeleton";
import { db } from '../../firestore/firebaseConfig'
import { firebase } from '@firebase/app'
import productos from '../../productos.json'

//import { getProducts } from "../../redux/thunks";





const ItemListContainer = ({title}) => {

  const category = useSelector(state => state.category)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const loadingArray = [0,1,2,3,4,5,6,7,8]

  const dispatch = useDispatch();

  /* useEffect(() => {
  dispatch(getProducts());    
  }, [dispatch]) */


  const getProducts = async () => {
    const q = query(collection(db, 'menu'))
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
    });
    console.log(docs)
  }
  useEffect(() => {
    getProducts()
  }, [])

  /* useEffect(()=>{
    const getData = new Promise(resolve => {
      setTimeout(() => {
        setIsLoading(false)
        category ? 
        resolve(productos.filter((producto) => producto.categoria === category)) :
        resolve(productos)
      }, 2000)
      
    })
    getData.then(res => setItems(res))
  },[category]) */

 

  return (
    <div className="text-center d-flex">
      <div style={{width: "75%" }}>
      <h1>{title}</h1>
      {isLoading ?  <div className='d-flex flex-shrink-1' style={{maxWidth: "100vw", flexWrap: "wrap", justifyContent: "space-evenly"}}>{loadingArray.map((element, idx)=> <Skeletons key={idx} />)}</div>  : <ItemList items={items}/>}
      </div>
      <div>
        <MisPedidos />
      </div>
    </div>
  );
};

export default ItemListContainer;

