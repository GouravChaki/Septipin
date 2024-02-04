const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    console.log(req.body)
    const email_id = 'gouravchaki123@gmail.com';
    const msg = req.body.message
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: `${process.env.EMAIL_ID}`,
        pass: `${process.env.PASSWORD}`,
      },
      from: `${process.env.EMAIL_ID}`,
    });

    const emailText = `Dear Doctor,\n\nPatient Update:\n\nSeverity Level: Moderate\nCause of Prediction: Anomalitiy and gradual chances as detected by Zcore and Sudden Spike\n\nPlease take immediate action and provide necessary medical attention. Your expertise is crucial for the well-being of the patient.\n\nBest Regards,\nTeam Septipin`;

    await transporter.sendMail({
      from: `"Gourav Chaki" ${process.env.EMAIL_ID}`,
      to: `${email_id}`,
      subject: `Urgent Medical Attention Required`,
      text: emailText+ " "+ msg,
    }, (error, info) => {
      if (error) {
        transporter.close();
        res.status(200).send({ success: false, message: "Error sending email:", error: error });
        return;
      } else {
        console.log(response)
        transporter.close();
        res.status(200).send({ success: true, message: "Mail Sent", response: info.response });
        return;
      }
    });
    return ;
  } catch (err) {
    console.log(err);
    await res
      .status(200)
      .send({ success: false, message: "Unable to send Mail", data: err });
      return;
  }
};
