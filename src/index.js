import dotenv from 'dotenv'
import express from "express";
import  connectDB  from "./db/index.js";
const app = express();

dotenv.config({
    path : './env'
})

connectDB()





/*((async) => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/${MONGO_DB}`)
    app.on("error" ,(error)=>{
        console.log("Error : " , error)
        throw err
    })
  } catch (error) {
    console.log("Error: ", error);
    throw err;
  }
})();
*/