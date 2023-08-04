const mongoose = require("mongoose")


const symptoms = new mongoose.Schema({
    image:{type:String},
    concern:{type:String},
    price:{type: Number},
     text:{type:String},
})
const symptomsData = mongoose.model("symptomsData", symptoms)

module.exports = symptomsData;