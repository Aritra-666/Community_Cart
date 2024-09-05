import mongoose from "mongoose";


const Seller = new mongoose.Schema({
    
        ID : String,
        Name : String,
        Email : String,
        Whatsapp : String,
        Aadhaar: String,
        PAN : String,
        Bank : String,
        Password : String,

});

 export const seller = mongoose.model('Seller', Seller );