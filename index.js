// Importing required packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Importing "connectDB()" to connect to MongoDB
import connectDB from "./src/config/database.js";

// Importing Routes
// Home Page Routes
import hompPageRoute from "./src/routes/home_page.route.js";

// Customer Routes
import loginPageRoute from "./src/routes/login.route.js";
import registerPageRoute from "./src/routes/register.route.js";

// Admin Routes
import adminLoginRoute from "./src/routes/admin_login.route.js";
import adminLogoutRoute from "./src/routes/admin_logout.route.js";
import adminMainPageRoute from "./src/routes/admin.route.js";
import manageCustomersRoute from "./src/routes/manage_customers.route.js";
import manageMedicinesRoute from "./src/routes/manage_medicines.route.js";
import manageSuppliersRoute from "./src/routes/manage_suppliers.route.js";

// Importing Middlewares
import ensureAdminLoggedIn from "./src/middlewares/ensure_admin_logged_in.middleware.js";



// Load environment variables from .env file
dotenv.config();

// Connected to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.set( "view engine", "ejs" );
app.set( "views", "./src/views" );

// Cookies
app.use( cookieParser() );

// Middleware for adding CSS and Javascript files in a project
app.use( express.static( "public/" ) );

// Middleware for extracting Form data in Request
app.use( express.urlencoded( { extended: true } ) );

// Middle for JSON Response
app.use( express.json() );


// import hompPageRoute from "./src/routes/home_page.route.js";
app.use( "/", hompPageRoute );

// import loginPageRoute from "./src/routes/login.route.js";
app.use( "/login", loginPageRoute );

// import registerPageRoute from "./src/routes/register.route.js";
app.use( "/register", registerPageRoute );

// import adminLoginRoute from "./src/routes/admin_login.route.js"
app.use( "/adminlogin", adminLoginRoute);

// import adminLogoutRoute from "./src/routes/admin_logout.route.js"
app.use( "/adminlogout", adminLogoutRoute );

/* 
"ensureAdminLoggedIn" is a middleware, which ensures that
whether an admin is logged in or not using cookies
*/
// import adminMainPageRoute from "./src/routes/admin.route.js"
app.use( "/admin", ensureAdminLoggedIn, adminMainPageRoute );

// import manageCustomersRoute from "./src/routes/manage_customers.route.js";
app.use( "/admin/customers", ensureAdminLoggedIn, manageCustomersRoute );

// import manageMedicinesRoute from "./src/routes/manage_medicines.route.js";
app.use( "/admin/medicines", ensureAdminLoggedIn, manageMedicinesRoute );

// import manageMedicinesRoute from "./src/routes/manage_suppliers.route.js";
app.use( "/admin/suppliers", ensureAdminLoggedIn, manageSuppliersRoute );


// If non-existing route is accessed by a user 
app.use( ( req, res, next ) => {
    res
    .status( 404 )
    .send(
        `<h1 style='color:red;font-size: 80px;'>Page not Found</h1>
        <a href='/' style='color:blue;font-size: 30px;'><< Go Back to site</a>`
    );
} )

// Define the port to listen on (from environment variables)
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Listening to port# ${PORT}`);
});