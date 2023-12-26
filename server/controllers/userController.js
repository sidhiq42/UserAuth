const bcrypt=require('bcrypt')
const User=require('../models/userRouter')

const RegisetrUser=async(req,res)=>{
    try{
    const {name,email,password}=req.body
    const exuser=await User.findOne({email})
    if(exuser){
        res.status(400).json({
            message:"the user Already Exister"
        })
    }
    const hashPassword=await bcrypt.hash(password,10)
    const user=await User.create({
        name,email,password:hashPassword
    })
     res.status(201).json({
        message:"Regsiterarion Successful",
        user
     })
    }
    catch(error){
        res.status(404).json({
            message:"Registeration UnsuccessFul"
        })
    }
}
const LoginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            res.status(400).json({
                message:"The Invalid User"
            })
        }
        const comaprePassword=await bcrypt.compare(password,user.password)
        if(!comaprePassword){
            res.status(400).json({
                message:"Invalid Password"
            })
        }
        res.status(200).json({
            message:"Logined Successfully ",
            user:user
        })
    }
    catch(error){
        res.status(404).json({
            message:"Login Unsuccessful",
            eror:error.message
        })
    }
}
const viewAlluser=async(req,res)=>{
    
}
module.exports={RegisetrUser,LoginUser}