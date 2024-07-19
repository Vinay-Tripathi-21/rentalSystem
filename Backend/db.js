const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dbrental')
.then(()=>{
    console.log("Database has  been connected successfully");
})
.catch((err)=>{
    console.log(err);
});