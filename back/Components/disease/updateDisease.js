const mongoose = require("mongoose");
const connect_to_mongo = require("../../database/db_create/connectdb");
const Disease = require("../../database/db_schemas/user_schemas/disease_schema");
const { ObjectId } = require("mongodb");

module.exports = async (req, res) => {
  try {
    await connect_to_mongo(); //calling the mongodb function for establishing connection

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
    if (!patient_id || !date) {
      res.status(200).send({
        success: false,
        message: "Patient Id and Date cannot be null",
        data: req.body,
      });
      return;
    }
    const existingEntry = await Disease.findOne({
      patient_id: new ObjectId(patient_id),
      "dates.date": new Date(date),
    });

    const result = await Disease.findOneAndUpdate(
      { patient_id: new ObjectId(patient_id), "disease.date": new Date(date) },
      {
        $set: {
          "disease.$.haemoglobin": haemoglobin || existingEntry.haemoglobin,
          "disease.$.systolic": systolic || existingEntry.systolic,
          "disease.$.diastolic": diastolic || existingEntry.diastolic,
          "disease.$.blood_sugar": blood_sugar || existingEntry.blood_sugar,
          "disease.$.thyroid": thyroid || existingEntry.thyroid,
          "disease.$.fetal_movement":
            fetal_movement || existingEntry.fetal_movement,
          "disease.$.bmi": bmi || existingEntry.bmi,
        },
      },
      { new: true }
    );
    await res.status(200).send({
      success: true,
      message: "PATIENT DETAILS UPDATED SUCCESSFULLY",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "ERROR IN PATIENT DETAILS UPDATION",
      data: error,
    });
  }
};
