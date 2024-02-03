const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  severity: {
    haemoglobin: {
      type: Number,
      default: 0
    },
    systolic: {
      type: Number,
      default: 0
    },
    diastolic: {
      type: Number,
      default: 0
    },
    blood_sugar: {
      type: Number,
      default: 0
    },
    thyroid: {
      type: Number,
      default: 0
    },
    fetal_movement: {
      type: Number,
      default: 0
    },
    bmi: {
      type: Number,
      default: 0
    }
  },
  disease: [
    {
      date: {
        type: Date,
        required: true,
      },
      haemoglobin: {
        type: Number,
      },
      systolic: {
        type: Number,
      },
      diastolic: {
        type: Number,
      },
      blood_sugar: {
        type: Number,
      },
      thyroid: {
        type: Number,
      },
      fetal_movement: {
        type: Number,
      },
      bmi: {
        type: Number,
      },
    },
  ],
});

const Disease = mongoose.model("Disease", DiseaseSchema);

module.exports = Disease;
