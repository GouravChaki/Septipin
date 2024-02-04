var ZScore = require("z-score").default;
var zScore = new ZScore();

const thresold = {
  systolic: {
    spike: 15,
    low: 120,
    high: 129,
  },
  diastolic: {
    spike: 15,
    low:  60,
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

const hasSuddenSpike = async (feature, filteredOldData, newData) => {
  const spikeThreshold = thresold[feature].spike;

    const change = filteredOldData[filteredOldData.length-1] - newData;
    if (Math.abs(change) >= spikeThreshold) {
      return 1;
    }
  return 0;
};

const hasCrossedThresold = async (feature, filteredOldData, newData) => {
  const highThreshold = thresold[feature].high;
  const lowThreshold = thresold[feature].low;
  return newData > highThreshold || newData < lowThreshold ? 2 : 0;
};

const checkZScore = async (feature, filteredOldData, newData) => {
  const convertedData = filteredOldData.map((val) => ({
    [feature]: val,
  }));
  const extractedData = {
    [feature]: newData,
  };
  await zScore.train(convertedData);
  var result = await zScore.calculate(extractedData);
  return result[feature] > 2 || result[feature] < -2? 1 : 0;
};

module.exports = {
  hasSuddenSpike,
  hasCrossedThresold,
  checkZScore,
};
