const mongoose = require("mongoose");

//to create a new schema named characterSchema
const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  profile_status: {
    type: Boolean,
    default: false
  },
  contact: {
    type: String,
  },
  gender: {
    type: String
  },
  token: {
    type: String,
  },
  gestational_age: {
    type: Number,
  },
  trimester: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  doctor_id: {
    type: String,
  },
  doctor_name: {
    type: String,
  },
  doctor_email: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
