const express =require('express');
const productRouter = express.Router();
const Product = require('../models/products');
const { verifyToken } = require('../middleware.js');

productRouter.get('/product',async (req,res)=>{
    console.log(req.body)

    try{
        const product = await Product.find();
        res.send(product);
    }catch(err){
        console.log(err)
    }

    
})

productRouter.get('/user-product',async (req,res)=>{
    const token =req.header('Authorization');
    
    try{
        const user =verifyToken(token);
        const product = await Product.find({ownerId:user.email});
        res.status(200).send(product);
    }catch(err){
       res.status(400).send({msg:err})
    }

    
});

productRouter.post('/additem',async(req,res)=>{
  
  
  const token =req.header('Authorization');
  
  const user =verifyToken(token);

  try {

    if (user.email) {
        const {productName,productPrice,productImage,productDescription} = req.body; 
        const response = new Product ({ownerId:user.email,
            productName:productName,
            productPrice:productPrice,
            productImage:productImage,
            Description:productDescription
        });
        await response.save();
        res.status(200).send('token verify')
      } 
  } catch (err) {
    res.status(400).send('token not verify')
  }
  
})

productRouter.get('/searchedProduct' ,async(req,res)=>{
    try {
        const {query} = req.query;
        console.log(query);
        const data = await Product.find({ $or: [
            { productName: { $regex: query, $options: 'i' } },
            { productDescription: { $regex: query, $options: 'i' } },
          ],});
        console.log(data);
        res.status(200).send("searched ",data);
    } catch (error) {
        res.status(400).send({ msg: 'Error searching products' });
    }
   
})


module.exports=productRouter;