
const express = require("express") ;  
const cors =  require("cors") ; 
const mongoose = require("mongoose") ; 

const app = express() ; 
const port = process.env.port || 3000 ; 

app.use(cors()); 


app.use(express.json()) ;

main().catch(err=> console.log(err)) ;


async function main() { 

     await mongoose.connect("mongodb+srv://atique:V62JV2zmkB0D4KFi@cluster0.vx7cs.mongodb.net/?retryWrites=true&w=majority") 
     .then( ()=> { 
        console.log("db connected")  ;
     })
}


const dishes = require("./routes/dishRoutes") ; 

const userRoutes  = require("./routes/userRoutes") ; 

app.use("/api" , dishes) ;  

app.use("/api/user", userRoutes) ;   

app.listen(port , ()=> { 

     console.log(`server is running on port ${port}`) ; 
})