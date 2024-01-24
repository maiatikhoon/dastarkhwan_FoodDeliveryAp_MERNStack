
import { createSlice } from "@reduxjs/toolkit"; 

const CartSlice = createSlice( {
    name : "cart" , 
    initialState : { 
        cart : [] 
    } ,   
    // state means initial state me jo value rehti h vo..and action means jo hum perform karna chahte hai and payload means jo data hume mill raha h  

    reducers: {     
        addToCart : (state, action)=> {  
            const existingFood = state.cart.find( item => item.id === action.payload.id) ; 

            if(existingFood) { 
                state.cart = state.cart.map( item => item.id===action.payload.id ? {...item, qty: item.qty+1} : item) ; 
            } else { 
                state.cart.push(action.payload) ;
            }
           
        } ,

        removeCart : (state, action)=> {  //we have to update the cart because we have removed one item
           state.cart = state.cart.filter( (item) => item.id !== action.payload.id ) ; 
        }
    }  
});

export const  {addToCart , removeCart} = CartSlice.actions ;  

export default CartSlice.reducer ; 