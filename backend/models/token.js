import mongoose from "mongoose";


const Token = new mongoose.Schema({
    
        ID: String,
        clientID : String,
        status: Boolean,

});

 export const token = mongoose.model('Token', Token );