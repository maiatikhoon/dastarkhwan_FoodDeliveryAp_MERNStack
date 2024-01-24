

const express = require("express") ; 

const { getDishes } = require("../controllers/dishController");

const router = express.Router() ; 


router.get("/dishes" ,getDishes) ;


module.exports = router; 