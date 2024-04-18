//entry point of server
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

//connect database
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));
 
const app = express();
// adds middleware to my Express application that automatically parses incoming requests with JSON payloads.
// It allows the server to easily read JSON data sent in the body of requests, which is common in API communication.
app.use(express.json());
//This line enables CORS (Cross-Origin Resource Sharing) on your server.
//CORS is a security feature that allows or restricts requests to your server based on the origin (i.e., the domain) of the request.
//Without this, web applications hosted on different domains from your server wouldn't be able to interact with it.
app.use(cors());

// if user goes to /api/my/user, server gets to the MyUserRoute.ts
app.use("/api/my/user", myUserRoute);

app.listen(3000, () => {
  console.log("server started on localhost:3000");
});
