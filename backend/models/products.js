import mongoose from "mongoose";


const Product = new mongoose.Schema({
     ProductID: String,
     AccountID:String,
     name:String,
     price:Number,
     unit: String

});

 export const product = mongoose.model('Product', Product );