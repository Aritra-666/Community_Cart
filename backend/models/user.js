import mongoose from "mongoose";


const User = new mongoose.Schema({
    
        Email: String,
        Name : String,
        Password: String,

});

 export const user = mongoose.model('Users', User );