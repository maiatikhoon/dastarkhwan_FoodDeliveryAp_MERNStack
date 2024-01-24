

const User = require("../model/User") ;  
const bcrpt = require("bcrypt") ;  
const jwt  = require("jsonwebtoken") ; 

const registerUser = async(req, res)=> { 

   const {name , email , password, cnf_password} = req.body ;  

   if(password!==cnf_password) { 
       return res.status(500).send(" The two password doesn't matched! ") ; 
   }

   const user = await User.findOne({ email : email }) ;   

   const salt = await bcrpt.genSalt(10) ; 
   const hashedPassword = await bcrpt.hash(password, salt) ; 

   if(!user) { 
       
      const newUser = new User( { 
         name : name , 
         email : email , 
         password : hashedPassword , 
      }) 

      
      const savedUser = await  newUser.save() ; 

      const token = jwt.sign({ id: savedUser._id} , "randomsecret")  ; 

      return res.json({
          user : newUser , 
          token : token ,
      }) 

    }else { 

      return  res.status(500).send("User already exists!") ; 
    }
     
}



const loginUser = async(req, res)=> { 

   const {email , password } = req.body ; 

   const user = await User.findOne({ email : email}) ; 

   if(!user) { 
      return res.status(500).send("User doesn't exits! ") ; 
   }


   const isPasswordMatchedfromDb = await bcrpt.compare(password , user.password) ; 


   if(isPasswordMatchedfromDb) { 
       
      const token = jwt.sign({userId : user._id} , "randomsecret")  ; 

      return res.status(200).json( { 
          user : user  , 
          token : token , 
       })
   }else {
      return res.status(401).send("Incorrect login crediantials") ; 
   }
    
}
 



module.exports = { registerUser , loginUser} ; 