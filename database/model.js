const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/templatedemo").then(()=>{
    console.log("database connected successfully");
});

const user= new mongoose.Schema({
    username:String,
    age:Number

});

module.exports=mongoose.model("user",user);