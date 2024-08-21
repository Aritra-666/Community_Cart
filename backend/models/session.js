import mongoose from "mongoose";


const Session = new mongoose.Schema({
    
      ID: String,
      Account: String,
      Expire: Number

});

 export const session = mongoose.model('Session', Session );