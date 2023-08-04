const mongoose=require('mongoose')


const fData= new mongoose.Schema({
    image:{type:String},
    feature:{type:String},
    desc:{type:String},
})



const featureData=mongoose.model("featureData",fData)

module.exports=featureData