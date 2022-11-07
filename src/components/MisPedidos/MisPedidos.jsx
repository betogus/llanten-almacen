import { clear, removeItem } from '../../redux/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from "@mui/material";
import React from "react";

const MisPedidos = () => {
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  const totalPrice = (item) => {
    return item.reduce((acc, product) => acc + product.price, 0)
  }

  return (
    <div>
      <h3>Mis Pedidos</h3>
      <div className="misPedidos-container">
        {cart[0] === undefined ? (
          <div className="misPedidos-empty">
            <i className="bi bi-search"></i>
            <span>Su carrito se encuentra vacío</span>
          </div>
        ) : (
          <div style={{ height: "500px" }}>
            <div style={{ height: "380px", overflowY: "auto" }}>
              {cart.map((item) => (
                <div className="misPedidos-item-container"  key={item.id}>
                  <div className="misPedidos-item">
                    <span
                      className="misPedidos-item-close"
                       onClick={() => dispatch(removeItem(item.id))} 
                    >
                      <i className="bi bi-x"></i>
                    </span>
                    <span className="misPedidos-item-quantity">
                       {item.quantity}00 g 
                    </span>
                    <span className="misPedidos-item-name">
                      {item.name} 
                    </span>
                    <span className="misPedidos-item-price"> ${item.price} </span>
                  </div>
                  <hr className="misPedidos-line"></hr>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-evenly align-items-center">
                 <Button variant="outlined" size="small" onClick={()=> dispatch(clear())}>
                  Borrar Todo
                </Button> 
                <p className="misPedidos-subtotal">Subtotal: $ {totalPrice(cart)} </p>
            
            </div>
            <Button variant="extended" size='small'  style={{marginTop: "10px"}} >
              Confirmar Compra
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MisPedidos;
