const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    dog_Name: String,
    dog_Price: Number,  
    dog_Breed: String 
   
}) 
 
module.exports = mongoose.model("Dog", 
dogSchema) 