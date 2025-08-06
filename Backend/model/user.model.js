import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String , require:true ,uinque:true},
    password:{type:String , require:true}
})
const userModel=mongoose.model("userModel",userSchema);
export default userModel;