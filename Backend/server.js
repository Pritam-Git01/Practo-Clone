const express = require("express");
// const connectDB = require("./DB/db");


const app = express();
let cors = require("cors");     
const featureData = require("./Schema/FeatureData")
const concernData = require("./Schema/ConcernData");
const appointData = require("./Schema/AppointData");
const specialistData = require("./Schema/Specialist");
const symptomsData = require("./Schema/Symptoms");
const doctorsData = require("./Schema/DoctorsData");
const consultationData = require("./Schema/ConsultData");
const userDetails = require("./Schema/User");
const dotenv =  require("dotenv");
const  mongoose  = require("mongoose");
const Razorpay  = require("razorpay");

app.use(cors());

app.use(express.json())

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected with DB, Successful"))
.catch((error) => console.log("Not Connected", error))

//  const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_SECRET,
//   });

  
  const OrderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String,
    },
  });

  const Order = mongoose.model('Order', OrderSchema);
  app.get('/get-razorpay-key', (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
  });
  app.post('/create-order', async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send('Some error occured');
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });
 
  
  app.post('/pay-order', async (req, res) => {
    try {
      const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
        req.body;
      const newOrder = Order({
        isPaid: true,
        amount: amount,
        razorpay: {
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          signature: razorpaySignature,
        },
      });
      await newOrder.save();
      res.send({
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  app.get('/list-orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  });
app.post("/fdata", async function(req,res){
    let data = await featureData.create(req.body)
    return res.send(data)
})
app.get("/fdata", async function(req,res){
    let data = await featureData.find()
    return res.send(data)
})
app.delete("/fdata",async function(req,res){
    let data = await featureData.deleteOne({_id: {$eq: "64b84c0017b128b24e1e7157"}})
    console.log(data)
    return res.send(data)
})
app.post("/cdata", async function(req,res){
    let data = await concernData.create(req.body)
    return res.send(data)
})
app.get("/cdata", async function(req,res){
    let data = await concernData.find()
    return res.send(data)
})

app.post("/adata", async function(req,res){
    let data = await appointData.create(req.body)
    return res.send(data)
})
app.get("/adata", async function(req,res){
    let data = await appointData.find()
    return res.send(data)
})
app.post("/specialist", async function(req,res){
    let data = await specialistData.create(req.body)
    return res.send(data)
})
app.get("/specialist", async function(req,res){
    let data = await specialistData.find()
    return res.send(data)
})
app.delete("/consult",async function(req,res){
    let data = await consultationData.deleteOne({_id: {$eq: "64bc263af3d93c20edf6ef19"}})
    console.log(data)
    return res.send(data)
})
app.put("/specialist", async function(req,res){
    let data = await specialistData.updateOne({_id:{$eq:"64bc17c877d506288a19787d"}}, {"$push":{"tags":"Vaginal infection"}})
    console.log(data)
    return res.send(data)
})
app.put("/specialist", async function(req,res){
    let data = await specialistData.updateOne({_id:{$eq:"64be4edf29a21743ffcc4c71"}},{specialist:"Gastroenterologist"})
    console.log(data)
    return res.send(data)
})


app.post("/symptoms", async function(req,res){
    let data = await symptomsData.create(req.body)
    return res.send(data)
})
app.get("/symptoms", async function(req,res){
    let data = await symptomsData.find()
    return res.send(data)
})
app.post("/doctors", async function(req,res){
    let data = await doctorsData.create(req.body)
    return res.send(data)
})
app.get("/doctors", async function(req,res){
    let data = await doctorsData.find()
    return res.send(data)
})

app.post("/consult", async function(req,res){
    let data = await consultationData.create(req.body)
    return res.send(data)
})
app.get("/consult", async function(req,res){
    let data = await consultationData.find()
    return res.send(data)
})


app.get("/consult/:id", async function(req,res){
    let data = await consultationData.find({ tags: { $regex: `^${req.params.id}`, $options: 'i' } })
    return res.send(data)
})

app.get("/consulting/:id", async function(req,res){
  let data = await consultationData.findOne({ doctor: { $regex: `^${req.params.id}`, $options: 'i' } })
  return res.send(data)
})

app.get("/consult-2/:id", async function(req,res){
    let data = await consultationData.findOne({ tags: { $regex: `^${req.params.id}`, $options: 'i' } })
    return res.send(data)
})
app.put("/consult", async function(req,res){
    let data = await consultationData.updateOne({_id:{$eq:"64c0f9f2c930bf2e043ad441"}},{$push:{"tags":"Cold cough & fever"}})
    console.log(data)
    return res.send(data)
})

app.post("/users", async function(req,res){
  let find = await userDetails.findOne({phone:{$eq: req.body.phone}})

  console.log(find, req.body.phone)
  if(find === null){
    let data = await userDetails.create(req.body)
    const temp =  {
      status:200,
      response:data
        }
    return res.send(data)
  } else {
 const temp =  {
  status:404,
  response:null
    }
    return res.send(temp)
  }
    
})

app.get("/users", async function(req,res){
    let data = await userDetails.find()
    return res.send(data)
})
app.get("/users/:id", async function (req,res){
    try {
        let data = await userDetails.findOne()
        return res.status(200).json(data)

    }catch(err){
        res.status(500).json(err)
    }
   
})

const port = process.env.PORT || 5000;
app.listen(port,  () => {
    
    console.log(`yes, server is running http://localhost:${port}`)
})

