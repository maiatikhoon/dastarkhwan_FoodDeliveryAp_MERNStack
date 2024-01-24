import React from 'react'
import {AiFillStar} from "react-icons/ai" ; 
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../redux/Slices/CartSlice'; 

function MyFoodCard({id, name , imgSrc, price, rating, handleToast}) { 

  const dispatch = useDispatch()  ; 

  return (
    <div className='font-bold w-[250px] h-[300px] bg-[rgb(244,244,244)] p-5 flex flex-col gap-2 rounded-lg border border-gray-300 shadow-md '>
         <img 
         src={imgSrc}
         alt='foodImage' 
         className='w-auto h-[180px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
         /> 
         
         <div className='text-sm flex justify-between'>
             <h2> {name} </h2> 
             <span className='text-green-500'>₹ {price}</span>
         </div> 
         <div className='flex justify-between items-center pt-4'>
              <span className='flex justify-between items-center'> 
                <AiFillStar className='mr-1 text-yellow-400'/> {rating}
              </span> 
              <button 
               onClick={ ()=> {
                dispatch(addToCart( {id, name ,imgSrc,price, qty : 1})) 
                handleToast(name) ;
               }}
               className='p-1 bg-green-500 text-white hover:bg-green-600 rounded-lg text-sm w-[100px]'> Add to Cart </button>
         </div>
    </div>
  )
}

export default MyFoodCard
