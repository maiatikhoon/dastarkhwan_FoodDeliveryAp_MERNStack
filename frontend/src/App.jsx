import React from 'react'  
import { BrowserRouter, Route, Routes} from 'react-router-dom'   
import Home from './pages/Home/Home' 
import About from "./pages/About/About" ; 
import Contact from "./pages/Contact/Contact" ; 
import Foods from './pages/Foods/Foods'; 
import Cart from './pages/Cart/Cart'; 
import LoginSignup from './pages/LoginSignup/LoginSignup'; 
import Error from './pages/Error/Error';




function App() {  

  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />   
            <Route path='/about' element={<About/>} />    
            <Route path='/contact' element={<Contact/>} />    
            <Route path='/food' element={<Foods/>} />      
            <Route path='/cart' element={<Cart/>} />       
            <Route path='/login' element={<LoginSignup/>} />       
            <Route path='/*' element={<Error/>} />     
        </Routes>
     </BrowserRouter>
  )
}

export default App
