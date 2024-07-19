const express = require('express')
const rentRouter = express.Router();
const Rent = require('../models/rent');
const Product = require('../models/products')
const { verifyToken } = require('../middleware');

rentRouter.post('/rent',async(req,res)=>{
  const token = req.header('Authorization');
    
    try{
      
      const user = verifyToken(token);
      const expireDate = new Date(new Date().getTime() + 30*24*3600*1000); //30days
      const {productId,productPrice,productName} = req.body.item;
      console.log(productId,productPrice);
    
      const rentedProduct = new Rent({userId:user.email, 
        productId,
        productName,
        totalPrice:productPrice*30,
        expireDate});
        console.log(rentedProduct);

      await rentedProduct.save();

        //update avalability of product 
        await Product.updateOne({_id:productId},{availabilityStatus:"unavailable"});

      res.status(200).send({msg:"you have rented product for one month"});
  }catch(err){
      res.status(400).send({msg:err})
  }

})

rentRouter.get('/user-rent',async(req,res)=>{
    const token = req.header('Authorization');
    console.log(token);
    try{
        const user = verifyToken(token);
       
        const rent = await Rent.find({userId:user.email});
        res.status(200).send(rent);
    }catch(err){
        res.status(400).send({msg:err})
    }
  
})


module.exports = rentRouter;