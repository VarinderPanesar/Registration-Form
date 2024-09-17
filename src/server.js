const FinalSchema = require('./models/MSchema');

const express = require("express");
const mongoose =require("mongoose");
const cors = require("cors");
const bodyParser =require("body-parser");
const port= 3001;
const app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/insertDB")
.then(()=>{console.log("DB is connected Succesfully")})
.catch((error)=>{console.log("DB is not connected!!!")})


app.post("/insert", async (req,res)=>{

const {f_name, l_name, email, phone, institute, address, city, province, p_code} = req.body;

const FinalData = new FinalSchema({
    f_name:f_name,
    l_name:l_name,
    email:email,
    phone:phone,
    institute:institute,
    address:address,
    city:city,
    province:province,
    p_code:p_code
})


try{

  const error_response=  await FinalData.validate();

  const response= await FinalData.save();
    res.status(200).send({message:"Data is saved Successfully"})
}

catch(error){
res.status(400).send({message:"Data is not Saved Sorry!!!",rec_error:error})
}


} )





app.listen(port,()=>{
    console.log("Server is running at ",port);
})