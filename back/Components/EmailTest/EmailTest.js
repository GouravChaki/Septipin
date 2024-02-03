const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
// const accountSid = "AC6064c91f917de33381e013eae7ba2992";
// const authToken = "df54ffcabe2808230a130e9f67f019e8";
// const client = require("twilio")(accountSid, authToken);
const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "2731c86a",
  apiSecret: "Gt8g5FfGwyafXeyy"
})

module.exports = async (req, res) => {
  try {
    const email_id = req.body.email_id;
    const danger_level = req.body.danger_level;
    const message = req.body.message;
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: `${process.env.EMAIL_ID}`,
        pass: `${process.env.PASSWORD}`,
      },
      from: `${process.env.EMAIL_ID}`,
    });


    // const from = "Vonage APIs"
    // const to = "919064599144"
    // const text = 'A text message sent using the Vonage SMS API'
    
    // async function sendSMS() {
    //     await vonage.sms.send({to, from, text})
    //         .then(resp => { console.log('Message sent successfully'); console.log(resp); })
    //         .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
    // }
    
    // sendSMS();
    // await client.messages
    //   .create({
    //     body: "Hey",
    //     from: "+14322148045",
    //     to: "+918250473010",
    //   })
    //   .then((message) => {
    //     console.log("message.sid");
    //     console.log(message.sid);
    //   })
    //   .done();
    // const res = await client.messages.create({
    //   body: "Hey Tukai!!!!!",
    //   from: "+14322148045",
    //   to: "+919064599144",
    // });
    console.log(res.message)
    await transporter.sendMail({
        from: `"Gourav Chaki" ${process.env.EMAIL_ID}`,
        to: `${email_id}`,
        subject: `${danger_level}`,
        text: "Hello. This email is for your email verification.",
        // html: `<h1> URGENT ${danger_level}!!</h1>
        //       <br/>
        //       <p>Dear Customer it is to inform that Badhai has detected: </p>
        //       <p>${message}.</p>
        //       <p>So, Kindly Visit a Health Care Provider Urgently!.</p>`,
    }, (error, info) => {
        if (error) {
            transporter.close();
            res.status(200).send({ success: false, message: "Error sending email: ",error:error });
            return;
        } else {
            transporter.close();
            res.status(200).send({ success: true, message: "Mail Send", response:info.response });
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
