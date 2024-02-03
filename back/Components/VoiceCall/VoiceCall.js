const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { Vonage } = require("@vonage/server-sdk");

module.exports = async (req, res) => {
  try {

    const vonage = new Vonage({
      apiKey: "820ecd95",
      apiSecret: "wIrbc8k5oA0ZwyG4",
      applicationId: "775d9572-6ee2-42e0-b73c-c3678ab2cfda",
      privateKey: "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWabphfZFN2iyoJiU+2YxIQ1/XYqzYc+GwnJK6wJP0kwq1acDquSnE3DzScnxM7mqayGg7Cnrs/WBvIFmIFiGWOM+uVokcgkyD55X6HEeT8fjxw9HGkRRDd6vS+3trC4rjn3wXq/RC01jSKv7YAq9Bc7K6HC9sHDxGfe1sWYrRE72BPHxpOFNK5Kt4iTbO66nf30Tb7naLOmW68kvZbjZ1LuHbD3hqLYtLVWA+ja5K9J0H8+Pklj1QOjUBpYInCs1DCrmtZ+N4Gp1bJ6T/CBYOOBlUy1SIaYCi5XRKvdw03L/marbDNjmNhrMvO8ja4VbGkiL46k5L5AuPWFRhoICRAgMBAAECggEAC9Jxjd2MDPRaIP1VcWUyWGuqlaghqp+dEo1Xg8eJgOM4pG8LzYVfGbUg/2ODmgRNSXKCWLsHsxh3YDky5o9905gXT2ADGFjQ2jcDLHKxuaUOWlo3L1EhgmTPSwdFs03EHy/UekOnaKXZkGEBgyyGuD+mW5+hN79IzYQ0+pPnVQa9RZbKHzx/zLjMCHW6LoxmVNkOLuzEhNQ/PiJTwkI6E+nI3VpXBdk8XXkOOZi+i0CKyQYGeWeze11AET/YIEtJ1juEzk4if8rNBGhtWJazjUjGzSp+gQ+pSUgd2549NBorGNHIijLLK1bl7q3NiFlmayp1XYm+3MoA8L5x3nWpPwKBgQDukYKjsKxLfLp0BtpEdY004SwdUWqsoKztY+k3t9kyYkNfUU1gIYW2VBIOD21wi1ZWq7UyhGj1cze0RBc4Cqyvc+PVl/rZILwsYp6u/aisULMzuObm0NFB/nru70FWqsYUlpxVWmh6jWIx/U7hkRfn1XSbF+7O9P886zyiv9uUGwKBgQDmFGJWZhwXlpRuZuV81RhB9/o+4tO95qw2P+ZEBEDK0iQ8x/IsG3AYyRzflK9f3GAa9n0krnvtWogNJ/jQfqv3X8H4CgYmuFXGtuaQsfyuEl5i5zcp/ClPwWYVTHXW4Zd8zXWDzl9XxPJKmmfgTJcLFJ4c8BmdIKK6QWSoHCcQwwKBgQDbyd8Lo4b4fM7iejW4gHw5TYHw+MNIizcF9dg05wIJMxJSzHp2qCuiEM4ZegkfeJ9wdf0Xr3lrOF0HjPu/O8ZgVmp+q+gFBe2XDryXB0bQigCvFBhWaed/302ut2oAyJB5A1DAKey7i2n+GBsGIUBe6/7jrCbtMDW+EBLq9cr8JQKBgD8KlMtBnS7lZnQ9o2Gp7cSdkqbKdeQRoVwX9Brs42fvXlh9HKDzP6q66DtmvQrSEk8w/KchW/l0FdUs/6L5IltclIRHEtpnJbGWCeTZr/duNwh4fAf3/MXKoxLw6VTgaSacETf1QvCEmTLRzeaKddRmaNBbBVmlSJEqO89IL3gLAoGAKDqGBDB+F3lkVMEptT+9R8L0Q/x+mZ0niS7JKQS8DFyukI33T8ClDlKs2C+5l0WJNeC57z44IerEk7MG/MCdDppY6Nbg7yOv+pfswu76SAKVrugC79zAUVebmSBZ6KcD0tabIJ3sT3uiT8IiTC7Nq4m62nsLKG+CmtHtfojR+Zk=",
    });

    const ANSWER_URL =
      "https://raw.githubusercontent.com/nexmo-community/ncco-examples/gh-pages/text-to-speech.json";

    vonage.voice
      .createOutboundCall({
        to: [
          {
            type: "phone",
            number: '+918869999028',
          },
        ],
        from: {
          type: "phone",
          number: '+918250473010',
        },
        answer_url: [ANSWER_URL],
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  } catch (err) {
    console.log(err);
    await res
      .status(200)
      .send({ success: false, message: "Unable to send Mail", data: err });
  }
};
