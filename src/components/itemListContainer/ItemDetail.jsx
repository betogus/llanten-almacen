import ButtonGroup from "../ButtonGroup/ButtonGroup";
import React from "react";

const ItemDetail = ({item}) => {
    
  return (
    <div className="itemDetail-container">
      <div  className="modal fade" id="exampleModalCenter"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{item.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="itemDetail-item">
                <div className="itemDetail-item-img">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="itemDetail-item-text">
                  <h2>{item.name}</h2>
                  <p>Precio por 100 gr: ${item.precio100gr}</p>
                  <p>Precio por Kg: ${item.precioKg}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              
              <ButtonGroup item={item} />
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default ItemDetail;
