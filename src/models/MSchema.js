const mongoose = require("mongoose");

const RawSchema = mongoose.Schema({
    f_name:{type:String, required:[true,"Please fill Postal code"]},
    l_name:{type:String, required:[true,"Please fill Postal code"]},
    email:{type:String, required:[true,"Please fill Postal code"]},
    phone:{type:String, required:[true,"Please fill Postal code"]},
    institute:{type:String, required:[true,"Please fill Postal code"]},
    address:{type:String, required:[true,"Please fill Postal code"]},
    city:{type:String, required:[true,"Please fill Postal code"]},
    province:{type:String, required:[true,"Please fill Postal code"]},
    p_code:{type:Number, required:[true,"Please fill Postal code"]}
},

{
    collection:"registration"
});

const FinalSchema = mongoose.model("FinalSchema",RawSchema);

module.exports=FinalSchema;

