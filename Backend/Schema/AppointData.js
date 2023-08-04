const mongoose =  require('mongoose')


const aData  =  new mongoose.Schema({
    image:{type:String},
    doctor:{type:String},
    problem:{type:String}
}) 

const appointData = mongoose.model("appointData",aData)
module.exports = appointData;