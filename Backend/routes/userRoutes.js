const express = require("express")
const userRouter = express.Router()
const User= require('../models/users');
const { generateToken, verifyToken } = require("../middleware");

userRouter.post('/user/register', async(req,res)=>{
    console.log(req.body);
 try {
    const user= new User(req.body);
    const msg= await user.save();
    res.send(200, {msg:"registerd successfully"} );

 }catch(err){
    console.log(err);
   }

});

userRouter.post('/user/signin', async(req,res)=>{
   const {email, password} = req.body;
   
try {
  const user = await  User.findOne({email});
  console.log(user);
  if (user.password == password) {
   
   const token= generateToken(user);
   console.log(token);
   res.send(200, {token ,msg:"login successfully"} )
   return token;
  }

}catch(err){
   console.log(err);
  }

});

userRouter.patch('/editprofile',async(req,res)=>{
   try {
      const token = req.header('Authorization');
      const user= verifyToken(token);
      if (user.email) {
         const {profile,address,mobile,name }=user.body;
         const existingUser = await user.find({email:user.email});
         const res= await  existingUser.save({profile,address,mobile,name});
         res.status(200).send({msg:"profile updated"})
      }
   } catch (err) {
      res.status(400).send({msg: err});
   }
})


userRouter.get('/userProfile',async(req,res)=>{
   const token = req.header('Authorization');
   try {
      const user= verifyToken(token);
      if (user.email) {
         const{name, profile, mobile, address} = await User.findOne({email:user.email});
         res.status(200).send({name, profile ,mobile, address})
      }
   } catch (err) {
      res.status(400).send({msg: err});
   }
})

module.exports = userRouter;