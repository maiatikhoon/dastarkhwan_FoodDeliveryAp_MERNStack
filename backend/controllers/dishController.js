
const Dishes = require("../model/Dishes") ; 

const getDishes = async(req ,res)=> { 

    const doc = await Dishes.find({}) ;  

    return res.status(200).json(doc) ; 
}

module.exports = { getDishes }  ;

