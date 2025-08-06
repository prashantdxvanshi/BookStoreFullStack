import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "../Backend/route/book.route.js";
import userRoute from "../Backend/route/user.route.js";

// const {UserModel}=require("./db")
const app = express();
app.use(cors());
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();
const PORT= process.env.PORT || 4000
// connect to database mongodb
const MongoDBURI=process.env.MongoDBURI;
try {
    mongoose.connect(MongoDBURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected successfully")
} catch (error) {
    console.log("error occured during connection")
}

app.use("/book",bookRoute);
app.use("/user",userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})