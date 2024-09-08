import mongoose from "mongoose";


const Image = new mongoose.Schema({
    
      ID: String,
      base64url:String

});

 export const image = mongoose.model('Image', Image );