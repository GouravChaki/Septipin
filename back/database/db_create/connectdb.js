require('dotenv').config();
const mongoose = require('mongoose');

URI=process.env.Database_URL; // Retrieving the Database variable from environment

//connecting to MongoDB with the received URL with validating all outcomes using try-catch block
const connect_to_mongo=async()=>{
try{
  await mongoose.connect(URI);
  console.log("Connection to database established");
}
catch(error){
    console.log("Can't connect to the database",error);
}
}

module.exports=connect_to_mongo;
