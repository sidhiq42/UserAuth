const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Your Name"]
    },
    email:{
        type:String,
        required:[true,"Enter Your Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Enter Your Password"],
        unique:true
    }
})
const userModel=mongoose.model('User',userSchema)
module.exports=userModel