const mongoose = require("mongoose");
const connect_to_mongo = require("../../database/db_create/connectdb");
const Patient = require("../../database/db_schemas/user_schemas/patient_schema");

module.exports = async (req, res) => {
  try {
    await connect_to_mongo(); //calling the mongodb function for establishing connection
    const {
      email,
      name,
      profile_status,
      contact,
      gender,
      gestational_age,
      bmi,
      trimester,
      doctor_id,
      doctor_name,
      doctor_email,
    } = req.body;

    if (!email) {
      //if id not provided then update can't be performed
      res
        .status(200)
        .send({ success: false, message: "VALUE MISSING", data: req.body });
      return;
    }
    const patient = await Patient.findOne({ email: email });

    if (!patient) {
      //if no character exists with the given character id
      await res.status(200).send({
        success: false,
        message: "PATIENT DETAILS DOESN'T EXIST WITH THE GIVEN ID",
        data: req.body,
      });
      return;
    }
    //if all values are provided then data is entered into the model
    const Patient_Details = await Patient.updateOne(
      { _id: patient._id },
      {
        $set: {
          name: name || patient.name,
          profile_status: profile_status,
          contact: contact || patient.contact,
          gender: gender || patient.gender,
          gestational_age: gestational_age || patient.gestational_age,
          trimester: trimester || patient.trimester,
          bmi: bmi || patient.bmi,
          doctor_id: doctor_id || patient.doctor_id,
          doctor_name: doctor_name || patient.doctor_name,
          doctor_email: doctor_email || patient.doctor_email
        },
      }
    );

    //if we have successfully entered details into character schema then success message is generated
    await res.status(200).send({
      success: true,
      message: "PATIENT DETAILS UPDATED SUCCESSFULLY",
      data: Patient_Details,
    });
  } catch (error) {
    //if some error is encountered during character schema entrance then error message is generated
    console.log(error);
    res.status(200).send({
      success: false,
      message: "ERROR IN PATIENT DETAILS UPDATION",
      data: error,
    });
  } finally {
    //database is closed after it has been used
    await mongoose.disconnect();
    // console.log('Disconnected from the database')
  }
};
