import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ItemDetail from './ItemDetail'
import { setDetail } from '../../redux/features/detailSlice'

const Item = ({item}) => {
  
  const [detailActivated, setDetailActivated] = useState(false)
  const detail = useSelector(state => state.detail.value)
  const dispatch = useDispatch()
   
  

    const getDetail =  (item) => {
       dispatch(setDetail(item))
       setDetailActivated(true)
    }
  
      

  return (
    <>    
    <div id={`${item.id}`} onClick={()=>getDetail(item)} className='item-cardContainer' data-toggle="modal" data-target="#exampleModalCenter" >
        <div  className='item-props'>
            <h4>{item.name}</h4>
            <p>precio por 100g: ${item.precio100gr}</p>
            <p>precio por Kg: ${item.precioKg}</p>
        </div>
        <div className='item-buttonContainer'>
          <i className="bi bi-chevron-compact-right"></i>
        </div>
        
    </div>
    {detailActivated && <ItemDetail item= {detail} />}
    </>

  )
}

export default Item