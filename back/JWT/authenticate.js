const jwt = require('jsonwebtoken');
const secretKey = 'MamaLearnz';
const AccessToken = require('../JWT/accesstoken'); // Assuming you have a model for access tokens
const regeneratetoken = require('../JWT/regeneratetoken');

const authenticate = async (req, res, next) => {
  const token = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  try{
  const data=jwt.verify(token,secretKey);
//   const expiry_time=data.exp_hours
//   var d = new Date();
//   const hours=d.getMinutes() - expiry_time.getMinutes()/60
//   console.log(hours)

//   if (hours<=0) {
//     res.status(200).send({success:false,message:'User Token Expired'});
//     return;
//   }

    // if(hours<=1){
    //     const new_token=regeneratetoken(token)
    //     const email=data.email
    //     const password=data.password
    //     if(patient_id!==null)
    //     {
    //         const patient=await prisma.patient.create({
    //             where:{
    //                 pk_patient_id:patient_id
    //             },
    //             data:{
    //                 token:new_token
    //             }
    //         })
    //         console.log('Refresh Token Expired for Patient');
    //         next();
    //     }
    //     if(doctor_id!==null)
    //     {
    //         const doctor=await prisma.doctor.create({
    //             where:{
    //                 pk_doctor_id:doctor_id
    //             },
    //             data:{
    //                 token:new_token
    //             }
    //         })
    //         console.log('Refresh Token Expired for Doctor');
    //         next();
    //     }
    //     res.status(200).send({success:false,message:'Patient Id or Doctor Id not received'});
    // }
    // console.log('Verified');
    next();
  } catch (err) {
    res.status(200).send({success:false,message:'Error in autenticate',error:err});
    return;  
}
};

module.exports = authenticate;
