const mongoose = require("mongoose");
const connect_to_mongo = require("../../database/db_create/connectdb");
const Disease = require("../../database/db_schemas/user_schemas/disease_schema");
const { ObjectId } = require("mongodb");

module.exports = async (req, res) => {
  try {
    await connect_to_mongo();

    const {
      patient_id,
      date,
      haemoglobin,
      systolic,
      diastolic,
      blood_sugar,
      thyroid,
      fetal_movement,
      bmi,
    } = req.body;

    const existingEntry = await Disease.findOne({
      patient_id: new ObjectId(patient_id),
      "disease.date": new Date(date),
    });

    if (existingEntry) {
      res
        .status(200)
        .send({
          success: false,
          message: "Disease entry for the specified date already exists",
          data: req.body,
        });
      return;
    }
    const result = await Disease.findOneAndUpdate(
      { patient_id: new ObjectId(patient_id) },
      {
        $push: {
          disease: {
            date: new Date(date),
            haemoglobin: haemoglobin,
            systolic: systolic,
            diastolic: diastolic,
            blood_sugar: blood_sugar,
            thyroid: thyroid,
            fetal_movement: fetal_movement,
            bmi: bmi,
          },
        },
      },
      { new: true, upsert: true }
    );

    //if we have successfully entered details into character schema then success message is generated
    await res.status(200).send({
      success: true,
      message: "PATIENT DETAILS UPDATED SUCCESSFULLY",
      data: result,
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
