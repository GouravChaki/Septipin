const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    const email_id = req.body.email_id;
    const severity_level = req.body.severity_level;
    const disease = req.body.disease;
    const cause = req.body.cause;

    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: `${process.env.EMAIL_ID}`,
        pass: `${process.env.PASSWORD}`,
      },
      from: `${process.env.EMAIL_ID}`,
    });

    const emailText = `Dear Doctor,\n\nPatient Update:\n\nSeverity Level: ${severity_level}\nMedical Condition: ${disease}\nCause of Prediction: ${cause}\n\nPlease take immediate action and provide necessary medical attention. Your expertise is crucial for the well-being of the patient.\n\nBest Regards,\nTeam Septipin`;

    await transporter.sendMail({
      from: `"Gourav Chaki" ${process.env.EMAIL_ID}`,
      to: `${email_id}`,
      subject: `${severity_level} - Urgent Medical Attention Required`,
      text: emailText,
    }, (error, info) => {
      if (error) {
        transporter.close();
        res.status(200).send({ success: false, message: "Error sending email:", error: error });
        return;
      } else {
        transporter.close();
        res.status(200).send({ success: true, message: "Mail Sent", response: info.response });
        return;
      }
    });
  } catch (err) {
    console.log(err);
    await res
      .status(200)
      .send({ success: false, message: "Unable to send Mail", data: err });
  }
};
