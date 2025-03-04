import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import { Server } from "socket.io";

import connectToSocket from "./controllers/socketManagers.js";

import cors from "cors";
import connectToSocket from "./controllers/socketManagers.js";
import userRoutes from './routes/users.routes.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server); // Initialize socket connection

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// API routes1

app.use("/api/v1/users", userRoutes);

//API routes2

// Test route
app.get('/home', (req, res) => {
  return res.json({ "hello": "world" });  // Removed unnecessary return
});

const start = async () => {

  try {

  app.set("mongo_user")

  const connectionDb = await mongoose.connect("mongodb+srv://mahityagi123456:Mahityagi123456@cluster0.eeb7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  console.log('MONGO Connected DB Host: ${connectionDb.connection.host} ') 

    server.listen(app.get("port"), () => {
      console.log("Listening on port 8000");

    });

  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

start();
