import "react-toastify/dist/ReactToastify.css";

import { Button, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { setCart } from '../../redux/features/cartSlice'
import { toast } from "react-toastify";

const ButtonGroup = ({ item }) => {
  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(35);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.value)


  const itemPrice = (counter, item) => {
    const quantityInKg = Math.floor(counter / 10);
    const quantityIn100g = counter - quantityInKg*10;
    const price =
      quantityIn100g * item.precio100gr + quantityInKg * item.precioKg;
    return price;
  };


  const onAdd = (item, counter) => {

    const price = itemPrice(counter, item);
    const newItem = {...item, price, quantity: counter}
    dispatch(setCart(newItem))
    toast(`Se agregaron ${newItem.quantity}00g de ${newItem.name} al carrito`)
     
}

  const handlerCounterUp = () => {
    setCounter(counter + 1);    
  };

  
   
  const handlerCounterDown = () => {
    setCounter(counter - 1);
  };

  useEffect(()=> {
    setPrice(itemPrice(counter, item))
  }, [counter])
 
  useEffect(()=> {
    setCounter(0)
  }, [item])
  
  return (
    <div>
      <Fab
        disabled={counter <= 0}
        onClick={handlerCounterDown}
        color="primary"
        aria-label="add"
        
      >
        -
      </Fab>
      <span>{counter}</span>
      <Fab
        disabled={counter >= stock}
        onClick={handlerCounterUp}
        color="primary"
        aria-label="add"
        
      >
        +
      </Fab>
      <Button
        disabled={stock <= 0 || counter === 0}
        onClick={() => {
          onAdd(item, counter);
          setCounter(0)
        }}
        color="primary"
        aria-label="add"
        data-dismiss="modal"   
      >
        Agregar al carrito (${price})
      </Button>
      
      
    </div>
  );
};

export default ButtonGroup;
