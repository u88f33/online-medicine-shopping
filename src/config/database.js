/**
 * -------------------------------------------------------
 * Database Configuration File
 * -------------------------------------------------------
 * This file is responsible for:
 * 1. Loading environment variables
 * 2. Connecting to MongoDB using Mongoose
 * 3. Handling connection success and error events
 * -------------------------------------------------------
 */

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

/**
 * Function: connectDB
 * -----------------------------------------
 * Establishes connection with MongoDB database
 * using the URI stored in environment variables.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    let MONGO_URI = process.env.MONGO_URI || 
    "mongodb://127.0.0.1:27017/online_medicine_shopping";

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected Successfully`);
    console.log(`Database Host: ${conn.connection.host}`);

  } catch (error) {
    // Log error message if connection fails
    console.error("Database Connection Failed");
    console.error(`Error Message: ${error.message}`);

    // Exit process with failure
    process.exit(1);
  }
};

/**
 * Export the connection function
 * so it can be used inside index.js
 */
export default connectDB;