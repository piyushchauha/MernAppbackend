const express=require("express");
const mongoose=require("mongoose");
const User=require("../models/userModel");
const router=express.Router();


//post operation
router.post("/",async(req,res)=>{
    const{name,email,password}=req.body;
    try{
      const userAdded= await User.create({
        name:name,
        email:email,
        password:password,
      });
      res.status(201).json(userAdded);
    }
    catch(error){
      res.status(400).json({error:error.message});
    }
  });

  //get Operation
  router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll); // Use 200 status code for success
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

  // get the single user
  router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
      const singleUser= await User.findById({_id:id});
      res.status(300).json(singleUser);
    }
    catch{
      res.status(500).json({error:error.message});
    }
  });


//delete operation

  router.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
      const singleUser= await User.findByIdAndDelete({_id:id});
      res.status(300).json(singleUser);
    }
    catch{
      res.status(500).json({error:error.message});
    }
  });
  module.exports=router;

//update operation

router.patch("/:id",async(req,res)=>{
  const{id}=req.params;
  const{name,email,password}=req.body;
  try{
    const updateUser=await User.findByIdAndUpdate(id,req.body,{
      new:true,
    })
    res.status(200).json(updateUser);
  }catch(error){
    console.log(error);
    res.status(500).json({error:error.message});
  }
});
  