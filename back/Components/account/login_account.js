const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const connect_to_mongo=require('../../database/db_create/connectdb');
const Patient = require('../../database/db_schemas/user_schemas/patient_schema');
const accesstoken = require('../../JWT/accesstoken');

module.exports= async (req, res) => {
    try {
      
        await connect_to_mongo();//calling the mongodb function for establishing connection

        //extracting user details from request
        const {email,password}=req.body;
        
        if(!email || !password)//if given values are null
        {
            res.status(200).send({success:false,message:"VALUE MISSING", data: req.body});
            return;
        }
        
        const account=await Patient.findOne({
            email:email
        })

        if(!account){
            res.status(200).send({success:false,message:"ACCOUNT WITH GIVEN CREDENTIALS DOESN'T EXIST", data: req.body});
            return;
        }

        const comp_pass=await bcrypt.compare(password,account.password)
        
        if(!comp_pass){
            res.status(200).send({ success: false, message: "PASSWORD DOESN'T MATCH", data: req.body});
            return;
        }
        const salt=await bcrypt.genSalt(10)
        const hashed_pass=await bcrypt.hash(password,salt)
        const token=await accesstoken(email,hashed_pass)//to retrieve the token from AccessToken module
        
        //if all values are provided then data is entered into the model
        const account_details = await Patient.updateOne(
            {_id:account._id},
            {
                $set:{
                    name: account.name,
                    email: account.email,
                    password: account.password,
                    token:token
                }
            }
        )
      //if we have successfully entered details into account schema then success message is generated
      await res.status(200).send({success:true,message:"LOGIN SUCCESS AND TOKEN UPDATED" ,account})
    }

    catch (error) {  
      //if some error is encountered during account schema entrance then error message is generated
      console.log(error)
      res.status(200).send({success:false,message :"ERROR IN ACCOUNT LOGIN" , data : error})
    }
    finally {
      //database is closed after it has been used
      await mongoose.disconnect();
      // console.log('Disconnected from the database')
    }
}