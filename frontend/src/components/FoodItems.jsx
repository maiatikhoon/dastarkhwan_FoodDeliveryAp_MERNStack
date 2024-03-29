import React, { useEffect, useState } from 'react'
import MyFoodCard from './MyFoodCard' 
import toast, {Toaster } from 'react-hot-toast'; 
import { useSelector } from 'react-redux'; 
import axios from "axios" ;

function FoodItems() { 

  const handleToast =(name) => toast.success(`added ${name}`) ;  
  const category = useSelector( state => state.category.category) ;  
  const search  = useSelector( state => state.search.search) ;  


  const [foodData, setFoodData] = useState([]) ;  
  const [loading , setLoading ] = useState(true) ; 


  const getAllDishes = async()=> { 

      const response =  await axios.get("https://dastarkhwan-food-delivery-ap-reactjs-backend.vercel.app/api/dishes") ; 

      const data = response.data ; 

       setFoodData(data) ;  
       setLoading(false) ;
         
  } 

 
  useEffect( ()=>{  

      getAllDishes() ;  

  } , [])

   return loading ? ( 
   <div className='ml-6 text-3xl text-black font-bold text-center'> Loading ....</div>)
    : ( 
    <> 
      <Toaster position="top-center" reverseOrder={false} /> 

      <div className='flex flex-wrap justify-center gap-10 lg:justify-center mr-14 my-10'>
          {
            foodData.filter((food)=>{ 
                  if(category==="All"){ 
                    return food.name.toLowerCase().includes(search.toLowerCase()) ; 
                  }  
                  else {
                     return category===food.category && food.name.toLowerCase().includes(search.toLowerCase()); 
                  }
             }).map( food => (
                    <MyFoodCard
                      key={food.id} 
                      id={food.id}
                      name ={food.name} 
                      imgSrc= {food.img } 
                      price={food.price}  
                      rating={food.rating}  
                      handleToast={handleToast} 
                    />
             ))
          }

      </div> 
    </>
  )
}

export default FoodItems
