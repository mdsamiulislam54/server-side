import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import errorHandler from "./errorhandaler/errorHandalar.js";
import userRouter from "./Route/userRouter.js";


dotenv.config();
const app = express();
app.use(bodyParser.json())

// Middleware setup
app.use(express.json());
// ব্যাকেন্ডে (server.js/app.js)
app.use(cors({
  origin: ["https://dailymartstore-59c72b-s-dev.netlify.app",'https://dailymart.up.railway.app'],
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true
})); 

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connection sucessfuly!");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/api/users', userRouter)
  

  
// Middleware setup
app.use(errorHandler);

// Server listen
app.listen(process.env.PORT || 5000, () => {
  console.log("App is running on port 5000");
});
