const mongoose =require('mongoose');

const productSchema = new mongoose.Schema({

        ownerId:{ 
            type:String,
            ref:'User',
            required:true
        },
        productName:{ 
            type:String,
            required:true
        },
        Description:{ 
            type:String,
            required:true
        },
        productPrice:{
             type:Number,
            required:true},
        productImage:{ 
            type:String,
            required:true},
        category:{
                type:String,
              //  required:true
            },
        productAvailability:{
            type: String,
           // required:true
        },
              
});

module.exports=mongoose.model('Product',productSchema);