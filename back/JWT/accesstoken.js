const jwt = require('jsonwebtoken');
const secretKey = 'MamaLearnz';
const bcrypt = require('bcrypt');
module.exports=async(email,hashed_pass)=>{
    // var d = new Date();
    // d=d.getHours();
    const token=jwt.sign({email:email,password:hashed_pass},secretKey,{ expiresIn: '1440m' })
    return token
 }