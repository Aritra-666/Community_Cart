import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import { token } from "./models/token.js";
import { user } from "./models/user.js";
import { session } from "./models/session.js";
import { product } from "./models/products.js";
import { seller } from "./models/seller.js";
import { image } from "./models/image.js";

const app = express();
const port = 3000;
dotenv.config()

app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));




main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.DBConnectionString
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


  const email = req.body.Email;

  user.findOne({ Email: email }).then((data) => {
    if (data == null) {
      const Token = otpGenerator.generate(10, { specialChars: false });
      

      const clientID = otpGenerator.generate(10, { specialChars: false });
    
      let mail = `Dear ${req.body.Name},
    
    Thank you for registering with Community Cart! Your one time sign in ID is ${clientID}. To complete your sign-up process and gain full access to our features, please verify your email address by clicking the link below. This step ensures that we have the correct contact information for you and helps keep your account secure.
    
    https://tokenverificationforcommunitycart-2.onrender.com/?token=${Token}
    
    If you did not create an account with Community Cart, please disregard this email.
    
    Thank you for joining our community!
    
    Best regards,
    The Community Cart Team`;

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
    } else {
      res.json({ ClientID: null });
    }
  });
});

app.post("/tokenUpdates", (req, res) => {
  token.findOne({ clientID: req.body.ClientID }).then((data) => {

    if (data !== null) {
      if (data.status) {
        const USER = new user({
          ID: `${req.body.Name}${Date.now()}${req.body.ClientID}`,
          Email: req.body.Email,
          Name: req.body.Name,
          Password: req.body.Password,
        });
        USER.save();
        res.json(true);
      } else {res.send(null)};
    } else {
      res.json(false);
    }
  });
});

app.post("/Login", async (req, res) => {
  

  let LoginStatus = await user.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  });

  if (LoginStatus !== null) {
    let cookieID = otpGenerator.generate(20);

    const Session = new session({
      ID: cookieID,
      Account: LoginStatus.ID,
      Expire: Date.now() + (3600000 * 24 * 365),
      Seller: false
    });
     await Session.save();

    res.json({ cookieID: cookieID });
  } else {
    res.send(false);
  }
});


app.post("/CookieCheck", async (req, res) => {



  let cookieStatus = await session.findOne({ ID: req.body.cookieID})

  if (cookieStatus !== null){

    if(cookieStatus.Expire > Date.now()){
      res.send(true)
    }else{
      res.send(false)
    }
    
  }else{
    res.send(false)
  }

})


app.post("/Account", async (req, res) => {

  let cookieStatus = await session.findOne({ ID: req.body.cookieID})
  if (cookieStatus !== null){
   
   let AccountID = cookieStatus.Account;

   if(cookieStatus.Seller){
    
     let User = await seller.findOne({ID: AccountID})
     
     res.json( 
      {
        uid: User.ID,
        name: User.Name,
        email: User.Email,
        seller:true
      }
    )

   }else{

    let User = await user.findOne({ID: AccountID})
     
    res.json( 
     {
       uid: User.ID,
       name: User.Name,
       email: User.Email,
       seller:false
     }
   )
   }


  }else{
    res.send(false)
  }

})


app.post("/getProducts", async (req, res) => {

 let products = await product.find({})



 res.send(products)
})


app.post("/verifySellerEmail", (req, res) => {

  console.log(req.body)

  const email = req.body.email;

  seller.findOne({ Email: email }).then((data) => {
    if (data == null) {
      const Token = otpGenerator.generate(10, { specialChars: false });
      

      const clientID = otpGenerator.generate(10, { specialChars: false });

      let mail = `Dear ${req.body.Name},
    
    Thank you for registering with Community Cart! Your one time sign in ID is ${clientID}. To complete your sign-up process and gain full access to our features, please verify your email address by clicking the link below. This step ensures that we have the correct contact information for you and helps keep your account secure.
    
    https://tokenverificationforcommunitycart-2.onrender.com/?token=${Token}
    
    If you did not create an account with Community Cart, please disregard this email.
    
    Thank you for joining our community!
    
    Best regards,
    The Community Cart Team`;

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
          console.log(TOKEN)
          res.json({ ClientID: clientID });
        }
      });
    } else {
      res.json({ ClientID: null });
    }
  });
});


app.post("/sellertokenUpdates", (req, res) => {

  console.log(req.body)
  
  token.findOne({ clientID: req.body.ClientID }).then((data) => {
   
    if (data !== null) {
      if (data.status) {
        const SELLER = new seller({
          ID: `Seller${req.body.name}${Date.now()}${req.body.ClientID}`,
          Name : req.body.name,
          Email : req.body.email,
          Whatsapp : req.body.whatsapp,
          Aadhaar: req.body.aadhaar,
          PAN : req.body.PAN,
          Bank : req.body.bank,
          Password : req.body.password,
        });
        SELLER.save();
        res.json(true);
      } else [res.send(null)];
    } else {
      res.json(false);
    }
  });
});



app.post("/sellerLogin", async (req, res) => {


  let LoginStatus = await seller.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  });

  if (LoginStatus !== null) {
    let cookieID = otpGenerator.generate(20);

    const Session = new session({
      ID: cookieID,
      Account: LoginStatus.ID,
      Expire: Date.now() + (3600000 * 24 * 365),
      Seller: true
    });
     await Session.save();

    res.json({ cookieID: cookieID });
  } else {
    res.send(false);
  }


})


app.post("/getownproducts", async (req, res) => {

  let cookieStatus = await session.findOne({ ID: req.body.cookieID})
  if(cookieStatus !== null){
    let AccountID = cookieStatus.Account
    let products = await product.find({AccountID: AccountID})
    res.json(products)
  }else{
    res.json(false)
  }
  



})


app.post("/AddProducts", async (req, res) => {

// console.log(req.body)

  
let cookieStatus= await session.findOne({ID:req.body.cookieID})
if(cookieStatus !== null){
  let ProductID=`${cookieStatus.Account}-${Date.now()}-${req.body.name}`
  let PRODUCT=new product(
    {
    ProductID:ProductID ,
    AccountID:cookieStatus.Account,
    name:req.body.name,
    price:req.body.price,
    unit: req.body.unit
  }
)
PRODUCT.save()

let IMAGE= new image(
  {
    ID:ProductID,
    base64url:req.body.IMG
  }
)
IMAGE.save()

}

console.log("done")
})





app.post("/ProductsImage", async (req, res) => {

  console.log(req.body)

  let Image = await image.findOne({ID : req.body.ID})

  if(Image !== null){
    console.log("res send..")
    res.json({url :Image.base64url})
  }


})