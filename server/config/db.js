const mongoose=require('mongoose')
const colors=require('colors')
const ConnectDB=async()=>{
 try{
    const conn=await mongoose.connect(process.env.MONGO_DB)
    console.log(`DateBase Connected Successfully ${conn.connection.host}`.bgBlue)
 }
 catch(error){
    console.log(`DateBase Not Connected`)
 }
}
module.exports=ConnectDB