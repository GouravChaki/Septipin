const mongoose = require("mongoose");
const connect_to_mongo = require("../../database/db_create/connectdb");
const Patient = require("../../database/db_schemas/user_schemas/patient_schema");
const Disease = require("../../database/db_schemas/user_schemas/disease_schema");
const { ObjectId } = require("mongodb");

module.exports = async (req, res) => {
  try {
    await connect_to_mongo(); //calling the mongodb function for establishing connection

    const { email } = req.body;

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

    const disease = await Disease.findOne({
      patient_id: new ObjectId(patient._id),
    });

    //if we have successfully entered details into character schema then success message is generated
    await res.status(200).send({
      success: true,
      message: "PATIENT DETAILS FETCHED SUCCESSFULLY",
      data: { 'patient': patient, 'disease': disease }
    });
  } catch (error) {
    //if some error is encountered during character schema entrance then error message is generated
    console.log(error);
    res.status(200).send({
      success: false,
      message: "ERROR IN PATIENT DETAILS FETCHING",
      data: error,
    });
  } finally {
    //database is closed after it has been used
    await mongoose.disconnect();
    // console.log('Disconnected from the database')
  }
};
