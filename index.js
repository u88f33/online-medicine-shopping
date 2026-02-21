// Importing required packages
import express from "express";          // Express framework for handling routes and server
import dotenv from "dotenv";            // dotenv for loading environment variables
import connectDB from "./src/config/database.js"; // Function to connect to MongoDB
import Admin from "./src/models/Admin.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();


// Define the port to listen on (from environment variables)
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Listening to port# ${PORT}`);
});