
import mongoose from "mongoose";

export const dbConnect = mongoose.connect('mongodb://127.0.0.1:27017/Lab4')
.then(()=> console.log("db connected"))
.catch((err)=> {console.log("Error connect"),err});

