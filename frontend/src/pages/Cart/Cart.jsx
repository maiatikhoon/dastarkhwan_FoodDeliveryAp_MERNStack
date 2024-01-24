import React from 'react'
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"  
import CheckOut from '../../components/CheckOut'; 
import CartItem from '../../components/CartItem';
import { useSelector } from 'react-redux' ;   
import { NavLink } from 'react-router-dom'; 
import "./Cart.css" ;

function Cart() { 

  let cartItems = useSelector( (state) => state.cart.cart ) ;  
  
  console.log(cartItems) ;  

  const totalCount = cartItems.reduce( (acc,curr) => {
       acc = acc + curr.qty ;  

       return acc ; 
  } , 0 )  ; 

  const totalPrice = cartItems.reduce( (acc, curr) => { 
      acc = acc + (curr.qty* curr.price) ; 

      return acc ; 
  } , 0)

  return (
    <div className=''>
        <div className='w-full pb-6 bg-gradient-to-r from-green-700 to-green-400'>
            <Header/>
        </div>  

         <h1 className='mt-6 mr-0 mb-0 ml-10 text-2xl'> Cart Page </h1>  

                    {
                         cartItems.length>0 ? (
                            <div className='containerCart'>
                               <ul className='listCart'> 
                                      {cartItems.map( cart =>(
                                        <li key={cart.id} >
                                            <CartItem 
                                                id={cart.id}
                                                imgSrc={cart.imgSrc} 
                                                name={cart.name} 
                                                price={cart.price} 
                                                quantity={cart.qty}
                                            />
                                        </li>
                                      ))}
                                 </ul>  

                                 <CheckOut
                                  count={totalCount} 
                                  price= {totalPrice} 
                                  />
                            </div> 
                             
                        ) : <div className='w-full flex flex-col justify-center items-center'>
                               <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png' 
                                alt='empty Cart'  
                                width={"400px"}
                               /> 
                               <h1 className='text-2xl text-gray-500 font-bold'> Your Cart is Empty ! </h1> 
                               <p> <NavLink to="/food" className='text-blue-700 underline'> return to shop </NavLink>
                               </p>
                        </div>
                  } 

              <Footer/>    

    </div>
  )
} 

export default Cart
