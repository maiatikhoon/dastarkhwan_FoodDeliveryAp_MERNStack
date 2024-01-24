
import React, { useState } from 'react' 
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"  
import { FaUser ,FaLock} from "react-icons/fa";  
import { MdEmail } from "react-icons/md";  
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import "./LoginSignup.css" ;


function LoginSignup() {  

  const initalState = { 
      name : "" , 
      email : "" , 
      password: "" , 
      cnf_password : "" ,
  } 

  const navigate = useNavigate() ; 

    const [action , setAction ] = useState("Login") ;   
    const [values , setValues] = useState(initalState) ;   
    const [ errors , setErrors ] = useState("") ; 


    const onHandleChange =(e)=> { 

         e.preventDefault() ; 

         setValues( { ...values, [e.target.name] : e.target.value}) 
    } 

    const addUserToLocalStorage = ({user, token})=> { 

        localStorage.setItem("user", JSON.stringify(user)) ; 
        localStorage.setItem("token", token) ; 
    } 


    const registerUser = async(currentUser)=> { 

         try {  
             
            const response =  await axios.post("https://dastarkhwan-food-delivery-ap-reactjs-backend.vercel.app/api/user/register" , currentUser) ;  

            const {user , token } = response.data; 

            addUserToLocalStorage({user, token}) ;  
            console.log("after local storage") ; 
            if(user) { 
               navigate("/food") ; 
               location.reload() ;
            } 

         } catch (error) {
            console.log(error) ;     
            console.log(error.response.data) ; 
            setErrors(error.response.data) ; 
         }
    } 

    const loginUser = async(currentUser)=> { 

         try {   

           const response = await axios.post("https://dastarkhwan-food-delivery-ap-reactjs-backend.vercel.app/api/user/login", currentUser) ; 

           const {user, token} = response.data ; 

           addUserToLocalStorage({user ,token}) ; 

           if(user) {
              navigate("/food") ; 
              location.reload(); 
           }
          
         } catch (error) {
            console.log(error)  ;
            
            setErrors(error.response.data) ; 
         }
    } 

    // console.log("values" , values) ;

    const handleSubmit =(e)=> { 
        e.preventDefault() ;
        const {name , email , password , cnf_password } = values; 
        
        const currentUser = { name , email , password , cnf_password } ; 

        if(action=="Login") { 
             loginUser(currentUser) ; 
        }else { 
            registerUser(currentUser) ; 
        }
    }

  return (
    <> 

        <div className='w-full pb-2 bg-gradient-to-r from-green-700 to-green-400 '>
              <Header/>
        </div>
        

        
        <div className='login-container'> 

                <div className='header'> 

                      <div className='text'> {action} </div> 
                      <div className='underline'>  </div> 

                </div>

                {errors && (
                    <div className='ml-[34px] text-red-400 pt-7'>
                      <p>{errors}</p>
                    </div>
                 )}

                <form onSubmit={ handleSubmit }>
                <div className='inputs'> 
               
                    {
                        action==="Login" ? <div></div> :  <div className='input'> 
                        <FaUser className='ml-6 mr-4 text-slate-600'/> 
                        <input type='text' placeholder='name' onChange={ onHandleChange } name='name' required/>
                        </div>
                    }
                    

                      <div className='input'>  
                        <MdEmail className='ml-6 mr-4 text-slate-600 text-xl'/>
                        <input type='email' placeholder='email' onChange={onHandleChange} name='email' required/>
                      </div>

                      <div className='input '> 
                        <FaLock className='ml-6 mr-4 text-slate-600'/> 
                        <input type='password' placeholder='password' onChange={ onHandleChange} name='password' required/>
                      </div> 

                      {
                        action==="Login" ? <div></div> : <div className='input '> 
                        <FaLock className='ml-6 mr-4 text-slate-600'/> 
                        <input type='password' placeholder='confirm password' onChange={ onHandleChange } name='cnf_password' required/>
                        </div> 
                      } 

                      {
                      action==="Sign up" ? <div></div> : <div className='forgot-password'>Lost Password ? <span> Click Here! </span></div> 
                      }

                      <button type='submit' className="submitButton"> { action=="Login"  ? "Login" : "Sign up"} </button> 
              
                  </div>  
                </form>
            

                {
                    action==="Sign up" ? <div className='haveAccount'> Already have and account ? Please <span onClick={ ()=> setAction("Login")}> login </span></div> 
                    :  <div className='haveAccount'> Dont't have an account ? Please <span onClick={ ()=> setAction("Sign up")}> register </span></div>
                }
          </div>  

       

        <Footer/>
    </>
  )
}

export default LoginSignup
