// Importing required packages
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import hompPageRoute from "./src/routes/home_page.route.js";
import loginPageRoute from "./src/routes/login.route.js";
import registerPageRoute from "./src/routes/register.route.js";
import adminLoginRoute from "./src/routes/admin_login.route.js"

// Load environment variables from .env file
dotenv.config();
// Connected to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.set( "view engine", "ejs" );
app.set( "views", "./src/views" );

app.use( express.static( "public/" ) )
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.use( "/", hompPageRoute );
app.use( "/login", loginPageRoute );
app.use( "/register", registerPageRoute );
app.use( "/adminlogin", adminLoginRoute);


// Define the port to listen on (from environment variables)
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Listening to port# ${PORT}`);
});