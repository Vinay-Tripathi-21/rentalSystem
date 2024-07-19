const jwt = require('jsonwebtoken')

 const generateToken =(user)=>{
    const token = jwt.sign({email:user.email, password:user.password},'RentalSystem',{
        expiresIn:'1h'
    });
    return token;
}

 const verifyToken=(token)=>{
    token= token.toString().substr(5);
    const val= jwt.verify(token,'RentalSystem'); 
    console.log(val, 'Verified token');
    return val;
}
module.exports ={generateToken, verifyToken};