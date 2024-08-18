import mongoose from "mongoose";


const User = new mongoose.Schema({
    
        ID: String,
        Email: String,
        Name : String,
        Password: String,

});

 export const user = mongoose.model('Users', User );