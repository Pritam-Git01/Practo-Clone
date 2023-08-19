const mongooes = require("mongoose")


const bookingDetails = new mongooes.Schema({
    razorpayOrderId:{type:String,required:true, unique:true},   
    patient_name:{type:String,required:true},
    phone:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:Object},
    status:{type:String},
    razorpayPaymentId:{type:String,required:true},
})

const bookingData = mongooes.model("bookingData", bookingDetails)
module.exports = bookingData;