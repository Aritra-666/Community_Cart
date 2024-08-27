import mongoose from "mongoose";


const Product = new mongoose.Schema({
    
     name:String,
     price:Number

});

 export const product = mongoose.model('Product', Product );