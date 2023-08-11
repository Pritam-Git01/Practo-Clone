const mongooes = require("mongoose")


const bookingDetails = new mongooes.Schema({
    isPaid:{type:Boolean},
    username:{type:String,required:true},
    phone:{type:String,required:true},
    specialist:{type:String,required:true},
    amount:{type:Number,required:true},
    razorpayPayment_id:{type:String,required:true},
    razorpayOrderId:{type:String,required:true, unique:true}
})

const bookingData = mongooes.model("bookingData", bookingDetails)
module.exports = bookingData;