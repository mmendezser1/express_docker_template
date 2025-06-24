import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

const mongoUri = `mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`;
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server here if you want to wait for DB connection
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});