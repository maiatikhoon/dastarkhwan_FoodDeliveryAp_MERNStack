

const mongoose = require("mongoose") ;  


const DishesSchema = new mongoose.Schema( { 

     name : {type : String, required : true} , 
    img :  { type: String, required : true} , 
    category :  {type : String, required : true} , 
    price :  {type : Number , required : true} , 
    quantity : { type: Number , required : true} , 
    
}) ;


const Dishes = mongoose.model("Dishes", DishesSchema) ; 

module.exports = Dishes; 