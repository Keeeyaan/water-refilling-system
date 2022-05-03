import http from "http";
import app from "./app.js";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "./db/connect.js";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
