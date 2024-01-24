
import React from 'react'
import { useDispatch } from 'react-redux' ;
import { removeCart } from '../redux/Slices/CartSlice' ; 

function CartItem({id,imgSrc, name, price,quantity}) {   

  const dispatch = useDispatch() ; 

  return (
    <>
          <div className=''>
               <img
                 src={imgSrc}  
                 alt="foodImage" 
                 className='cartImage'
               />
          </div>
          <div className=''>
               {name}
          </div>

          <div className=''>
               {quantity} 
          </div> 

          <div className=''>
              ₹{price}
          </div> 

          <div className=''>
              <button  
               onClick={ ()=> dispatch(removeCart({id, name, imgSrc, price, quantity}))}
               className='removeBtn'> Remove </button>
          </div>
    </>
  )
}

export default CartItem
