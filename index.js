// Importing required packages
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import hompePageRoute from "./src/routes/home_page.route.js";

// Load environment variables from .env file
dotenv.config();
// Connected to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.set( "view engine", "ejs" );
app.set( "views", "./src/views" );

app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );
app.use( "/", hompePageRoute );



// Define the port to listen on (from environment variables)
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Listening to port# ${PORT}`);
});