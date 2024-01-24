import React from "react";
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"  
import FoodCard from "../../components/FoodCard";
import foodData from "../../data";
import { useNavigate } from "react-router-dom";   
import "./Home.css" ;

function Home() { 

  const user = localStorage.getItem("user") ;   

  const navigate = useNavigate() ;  

  const logoutUser =()=> { 
      localStorage.removeItem("user") ; 
      location.reload() ;
  }

   return (
    <>
      <div className="backgroundImage">
        <Header />
        <div className="container">
          <div className="text-white text-center">
            <h1 className="heading text-8xl">Dastarkhawn</h1>
          </div>

          <div className="ms:text-white sm:text-3xl sm:font-medium sm:mt-5 font-normal text-white ">
            
            Explore delicious food near you as
          </div>
          <div className="sm:text-white sm:text-3xl sm:font-medium sm:mt-1 font-normal text-white">
            
            every flavour tells a story
          </div>
        
           <div className="flex justify-center gap-4">
              <button 
               onClick={ ()=> navigate( user ? "/food" : "/login")} 
               className="w-[200px] p-3 bg-green-600 text-white mt-4 rounded-lg text-lg outline-none cursor-pointer hover:bg-green-500">
                
                   { user ? "start ordering" : "Login now"} 
              </button> 
              {
                user && ( 
                  <button  
                   onClick={ logoutUser }
                   className="w-[200px] p-3 bg-green-600 text-white mt-4 rounded-lg text-lg outline-none cursor-pointer hover:bg-green-500">
                
                    {"Logout User"} 
               </button> 
                )
              } 
           </div>

        </div>
      </div>

      <div className="mt-10 w-full flex flex-col justify-center items-center">
        <div className="text-3xl font-thin mt-4">
         
          Popular food Item of Dastarkhawn
        </div>

        <div className="mt-[-20px]">
          {foodData && foodData.length
            ? foodData.map((foodItem, index) => (
                <FoodCard
                  imgTitle={foodItem.name}
                  imgSrc={foodItem.img}
                  imgDesc={foodItem.description}
                  key={foodItem.id}
                />
              ))
            : null}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
