import React, { useState } from 'react'
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"  
import CategoryMenu from "../../components/CategoryMenu" ; 
import FoodItems from "../../components/FoodItems"
import { useDispatch } from 'react-redux' ;   
import {setSearch} from "../../redux/Slices/SearchSlice"

function Foods() {  


  const dispatch = useDispatch() ; 
  return (
    <>
       <div className='w-full pb-2 bg-gradient-to-r from-green-700 to-green-400'>
            <Header/>
      </div>

        <div className='flex flex-col lg:flex-row justify-between mx-6 mt-4 py-3'> 
              <div>
                <h3 className='text-xl text-gray-600 font-light'> { new Date().toUTCString().slice(0,16)} </h3>  
                <h1 className='text-2xl text-black font-bold'> Dastarkhawn </h1>
              </div> 

              <div>
                <input
                  type="search" 
                  name='search' 
                  id=''
                  placeholder='search here'
                  autoComplete='off' 
                  onChange={ (e)=> dispatch(setSearch(e.target.value))} 
                  className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
                  />
              </div> 
        </div> 

        <CategoryMenu/>  
        <FoodItems/>   
        <Footer/>
    </>
  )
}

export default Foods
