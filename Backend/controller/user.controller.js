import userModel from "../model/user.model.js";
import bcryptjs from "bcryptjs";
// in controller we have to define functions over the model
export const signup=async(req,res)=>{
 try{
    const {name,email,password}=req.body;
    const userfind=await userModel.findOne({email});
    if(userfind){
       return res.status(400).json({message:"user already exists"});
    }
    const hashpassword=await bcryptjs.hash(password,10);
   //  if user is not there then create one
   const createuser=new userModel({
       name:name,
       email:email,
       password:hashpassword
   });

   await createuser.save();
   res.status(201).json({message:"user created successfully",userfind:{
      _id:createuser._id,
      name:createuser.name,
      email:createuser.email,
   }});
 }catch(err){
  if(err.response){
   console.log(err);
   alert("error: "+err.response.data.message)
  }
res.status(500).json({message:"internal server error"});
 }
};

export const login=async(req,res)=>{
   try{
   const{email,password}=req.body;
   const userfind=await userModel.findOne({email});
   const isMatch=await bcryptjs.compare(password,userfind.password);
   if(!userfind || !isMatch){
    return res.status(400).json({message:"invalid credential"});
   }else{
    res.status(200).json({message:"login successfully",user:{
        _id:userfind._id,
        name:userfind.name,
        email:userfind.email
    }})
   }
   }catch(error){
   console.log("error: "+error.message);
   res.status(500).json({message:"internal server error"});
   }
}