const { ObjectId } = require("mongodb");
const {
  checkZScore,
  hasSuddenSpike,
  hasCrossedThresold,
} = require("./Utils/utils");
const Disease = require("../../database/db_schemas/user_schemas/disease_schema");
const connect_to_mongo = require("../../database/db_create/connectdb");
const thresold = {
  systolic: {
    spike: 15,
    low: 120,
    high: 129,
  },
  diastolic: {
    spike: 15,
    low: 60,
    high: 80,
  },
  sugar: {
    spike: 1.2,
    low: 3.8,
    high: 5.3,
  },
  thyroid: {
    spike: 1,
    low: 10,
    high: 0.01,
  },
  hemoglobin: {
    spike: 3.1,
    low: 11.25,
    high: 14,
  },
};
module.exports = async (req, res) => {
  try {
    await connect_to_mongo(); //calling the mongodb function for establishing connection

    const { patient_id, feature, oldData, newData } = req.body;
    const { low, high, spike } = thresold[feature];
    console.log(thresold[feature]);
    const filteredOldData = oldData.filter((entry, index) => {
      if (index > 0) {
        const diff = Math.abs(entry - oldData[index - 1]);

        return entry >= low && entry <= high && diff <= spike;
      }
      return true;
    });
    const checkZscoreValue= await checkZScore(feature, filteredOldData, newData);
    const hasSuddenSpikeValue= await hasSuddenSpike(feature, filteredOldData, newData);
    const hasCrossedThresoldValue= await hasCrossedThresold(feature, filteredOldData, newData);
    const result = checkZscoreValue + hasSuddenSpikeValue + hasCrossedThresoldValue;

    const tempData = await Disease.findOneAndUpdate(
      { patient_id: new ObjectId(patient_id) },
      {
        $set: {
          [`severity.${feature}`]: result,
        },
      },
      { new: true }
    );
    await res.status(200).send({
      success: true,
      emergency: true,
      message: {
        result: result,
        zScore: checkZscoreValue,
        suddenSpike: hasSuddenSpikeValue,
        thresoldValue: hasCrossedThresoldValue,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(200).send({
      success: false,
      message: err,
      data: err,
    });
  }
};
