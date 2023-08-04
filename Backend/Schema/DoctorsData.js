const mongooes = require("mongoose");

const dData = new mongooes.Schema({
    image:{type:String},
    name:{type:String},
    type:{type:String},
    exp:{type:Number},
    consultation:{type:Number},
    rating:{type:Number}
})

const doctorsData  = mongooes.model("doctorsData",dData);
module.exports = doctorsData;