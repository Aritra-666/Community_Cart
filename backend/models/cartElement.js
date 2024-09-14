import mongoose from "mongoose";


const CartElement = new mongoose.Schema({
    
      SessionID: String,
      ProductID:String

});

 export const cartElement = mongoose.model('CartElement', CartElement );