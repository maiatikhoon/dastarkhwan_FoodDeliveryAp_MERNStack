
import React from 'react'

function CheckOut({count, price}) {
  return (
    <>
        <div className='checkout'>
              <div>
                    <div className='foods-count'> {count} </div> 
                    <div className='total-price'> ₹{price} </div> 
              </div>

              <button className='proceedCheckout'> Proceed to Checkout </button>
        </div>
    </>
  )
}

export default CheckOut
