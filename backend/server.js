import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import cors from "cors";
import bodyParser from "body-parser";

import { token } from "./models/token.js";
import { user } from "./models/user.js";

const app = express();
const port = 3000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://aritrapandit67:jBdF3kDd04LP7h5S@community-cart.cbq3w.mongodb.net/"
  );
}

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server for Community_Cart is listening on port ${port}`);
});

app.post("/verifyEmail", (req, res) => {
  console.log(req.body);
  const ipAddress = req.socket.remoteAddress;
  console.log(ipAddress);
  const device = req.headers["user-agent"];
  console.log(device);

  const email = req.body.Email;

  const Token = otpGenerator.generate(10, { specialChars: false });
  console.log("Generated token:", Token);

  const clientID = otpGenerator.generate(10, { specialChars: false });
  console.log("Generated Client ID:", clientID);
  let mail = `Dear ${req.body.Name},

Thank you for registering with Community Cart! To complete your sign-up process and gain full access to our features, please verify your email address by clicking the link below. This step ensures that we have the correct contact information for you and helps keep your account secure.

https://tokenverificationforcommunitycart-2.onrender.com/?token=${Token}

If you did not create an account with Community Cart, please disregard this email.

Thank you for joining our community!

Best regards,
The Community Cart Team`;

  // let mail = `Welcome ${req.body.Name} from Community Cart. For confirmation of your Email click on http://localhost:3000/updateVerifingStatus?token=${Token} . If not you then report on ########## `;
  console.log(mail);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dev.Bold2006@gmail.com",
      pass: "csnc qzqp zfpq dogh",
    },
  });

  var mailOptions = {
    from: "codeboldy",
    to: email,
    subject: "Email Verification",
    text: mail,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      console.log("Email sent: " + info.response);
      const TOKEN = new token({
        ID: Token,
        clientID: clientID,
        status: false,
      });
      TOKEN.save();
      res.json({ ClientID: clientID });
    }
  });
});

// app.get('/updateVerifingStatus', async (req, res) => {

//   console.log(req.query.token)

//    await token.updateOne({ ID: req.query.token}, { $set: { status: true} })

// res.send("Confimed your Email")

// })

app.post("/tokenUpdates", (req, res) => {
  token.findOne({ clientID: req.body.ClientID }).then((data) => {
    console.log(data);
    if (data !== null) {
      if (data.status) {
        const USER = new user({
          Email: req.body.Email,
          Name: req.body.Name,
          Password: req.body.Password,
        });
        USER.save();
        res.json(true);
      } else [res.send(null)];
    } else {
      res.json(false);
    }
  });
});
