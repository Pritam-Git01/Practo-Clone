const mongoose = require("mongoose");

const specialist = new mongoose.Schema({
    image:{type:String},
    specialist:{type:String},
    price:{type:Number},
    text:{type:String},

})
const specialistData = mongoose.model("speciallistData",specialist)
module.exports = specialistData;