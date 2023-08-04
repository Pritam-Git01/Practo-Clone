const { default: mongoose } = require('mongoose')
const mongooes  = require('mongoose')

const consultData = new mongoose.Schema({
    doctor:{type:String},
    price:{type:Number},
    tags:{type:Array}
})

const consultationData = mongooes.model("consultationData", consultData)
module.exports = consultationData;