const mongoose = require("mongoose");

//to create a new schema named characterSchema
const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  patients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  }]
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
