const jwt = require('jsonwebtoken');
const secretKey = 'MamaLearnz';
const bcrypt = require('bcrypt');
module.exports=async(token)=>{
    const data=jwt.verify(token,secretKey);
    // var d = new Date();
    // d=d.getHours();
    const token_created=jwt.sign({email:data.email,password:data.password},secretKey,{ expiresIn: '1440m' })
    return token_created
 }