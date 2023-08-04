const mongoose = require("mongoose")

const userData = new mongoose.Schema({
   name:{type:String,required:true},
   phone:{type:Number,required:true, unique:true},
   password:{type:String,required:true}
})

const userDetails = new mongoose.model("userDEtails",userData)
module.exports = userDetails;