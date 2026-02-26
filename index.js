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
import addCustomerRoute from "./src/routes/add_customer.route.js"
import seeCustomerRecordRoute from "./src/routes/see_customer_record.route.js"
import deleteCustomerRecordRoute from "./src/routes/delete_customer_record.route.js"
import updateCustomerRecordRoute from "./src/routes/update_customer.route.js";
import userProfileRoute from "./src/routes/profile.route.js"
import userLogoutRoute from "./src/routes/logout.route.js"
import userLoginByAdminRoute from "./src/routes/admin_login_user_account.route.js"
import userProfileUpdateRoute from "./src/routes/update_by_user.route.js"
import userForgotPasswordRoute from "./src/routes/forgot_password/forgot_password.route.js"
import resetPasswordRoute from "./src/routes/forgot_password/reset_password.route.js"

// Importing Middlewares
import ensureAdminLoggedIn from "./src/middlewares/ensure_admin_logged_in.middleware.js";
import ensureUserLoggedIn from "./src/middlewares/ensure_user_logged_in.middleware.js";



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


/** 
 * 
 * Admin Routes
 * 
*/
// import adminLoginRoute from "./src/routes/admin_login.route.js"
app.use( "/adminlogin", adminLoginRoute);

app.use( "/adminlogout", adminLogoutRoute );
app.use( "/admin", ensureAdminLoggedIn, adminMainPageRoute );
// import manageCustomersRoute from "./src/routes/manage_customers.route.js";
app.use( "/admin/customers", ensureAdminLoggedIn, manageCustomersRoute );
// import manageMedicinesRoute from "./src/routes/manage_medicines.route.js";
app.use( "/admin/medicines", ensureAdminLoggedIn, manageMedicinesRoute );
// import manageMedicinesRoute from "./src/routes/manage_suppliers.route.js";
app.use( "/admin/suppliers", ensureAdminLoggedIn, manageSuppliersRoute );
// import addCustomerRoute from "./src/routes/add_customer.route.js"
app.use( "/admin/addcustomer", ensureAdminLoggedIn, addCustomerRoute );
// import seeCustomerRoute from "./src/routes/see_customer_record.route.js"
app.use( "/admin/seerecord", ensureAdminLoggedIn, seeCustomerRecordRoute );
// import seeCustomerRoute from "./src/routes/see_customer_record.route.js"
app.use( "/admin/updaterecord", ensureAdminLoggedIn, updateCustomerRecordRoute );
// import seeCustomerRoute from "./src/routes/see_customer_record.route.js"
app.use( "/admin/deleterecord", ensureAdminLoggedIn, deleteCustomerRecordRoute );
// import userLoginByAdminRoute from "./src/routes/admin_login_user_account.route.js"
app.use( "/admin/loginaccount", ensureAdminLoggedIn, userLoginByAdminRoute );

/*
 * When a user forgot password and clicks on "Forgot Password"
*/
app.use( "/forgotpassword", userForgotPasswordRoute );
app.use( "/reset", resetPasswordRoute );

/**
 * Customer Profile Route can only be accessed when a User is logged in
 * Second Parameter is a middleware which ensures that the user
 * is logged in. If not then this middleware returns to the login page. 
 */
app.use( "/profile", ensureUserLoggedIn, userProfileRoute );
app.use( "/profile/logout", ensureUserLoggedIn, userLogoutRoute );
app.use( "/profile/updateprofile", ensureUserLoggedIn, userProfileUpdateRoute );


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