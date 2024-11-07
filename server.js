const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const userRoute=require("./routes/userRoute");

app.use(express.json());
const User=require("./models/userModel");
mongoose.connect(process.env.URI).then(()=>{
   console.log("Connected Successfully");
   app.listen(process.env.PORT||8000,(err)=>{
        if(err) console.log(err);
        console.log("Running Successfully at",process.env.PORT);
   });
});
app.use(userRoute);