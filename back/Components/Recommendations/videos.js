// const { google } = require("googleapis");
const apiKey = "AIzaSyDKJtn6nAIjqvx5bKWDGftBTPJUXI4_FW0";
const apiUrl = "https://www.googleapis.com/youtube/v3/search";
const axios = require("axios");
let query;

module.exports = async (req, res) => {
  try {
    const { trimester, type, gestational_age, bmi } = req.body;
    console.log(req.body)
    let response;
    if (type === "music") {
      query = "Pregnancy music for mother and unborn baby";
    }
    if (type === "yoga") {
      let sitn;
      if (bmi <= "18.5") {
        sitn = "underweight";
      }
      else if (bmi >= "25.0") {
        sitn = "obese";
      }
      else {
        sitn = "healthy"
      }
      query =
        "Yoga / Exercises for pregnant ladies in their " +
        trimester +
        "th trimester and " +
        sitn +
        " body videos";
    }
    if (type === "selfHelp") {
      query = "Self Help Video for" + trimester + "th trimester of pregnancy";
    }
    response = await axios.get(apiUrl, {
      params: {
        key: apiKey,
        q: query,
        part: "snippet",
        type: "video",
      },
    });
    await res.status(200).send({
      success: true,
      message: "Video links are as follows",
      data: response.data,
    });
    return;
  } catch (err) {
    console.log(err);
    await res
      .status(200)
      .send({ success: false, message: "Error in fetching links", data: err });
  }
};
