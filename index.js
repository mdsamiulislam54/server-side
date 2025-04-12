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
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"], // PUT মেথড অ্যালাউ করুন
  credentials: true
})); // Call cors as a function 

// Database connection
mongoose
  .connect(process.env.MONGO_URL )
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
