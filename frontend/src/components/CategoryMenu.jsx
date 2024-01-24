import React, { useEffect, useState } from 'react' 
import foodData from '../foodData'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { setCategory } from '../redux/Slices/CategorySlice';

function CategoryMenu() {  

  const [categories ,setCategories] = useState([]) ; 

  const listUniqueCategories = ()=> { 
 
    const uniqueCategories = [...new Set(foodData.map(food => food.category))] ;  
    setCategories(uniqueCategories) ;
    
  }  

  useEffect( ()=> { 
      listUniqueCategories() ;
  } , []) ;  

  const dispatch = useDispatch() ;  
  const selectedCategory = useSelector(state => state.category.category) ; 

  return (
    <div className='ml-6'>
        <h3 className='text-xl font-semibold'> Find the best food </h3> 
        <div className='py-5 flex gap-3'> 
             <button 
              onClick={()=> dispatch(setCategory("All"))}
              className={`px-3 py-2 bg-gray-200 font-light  rounded-lg hover:bg-green-500 hover:text-white
                ${selectedCategory==="All" && "bg-green-500 text-white"}
              `}> All </button>  

            {
              categories.length > 0 ? (
                 categories.map((category, index)=> (
                  <button 
                   onClick={ ()=> dispatch(setCategory(category))}
                   key={index} className={`px-3 py-2 bg-gray-200 font-light rounded-lg hover:bg-green-500   hover:text-white ${selectedCategory===category && "bg-green-500 text-white"}
                   `}> {category} </button>   
                 ))
              ): null
            }
    
        </div>
    </div>
  )
}

export default CategoryMenu
