=================================================

ADMIN CREDENTIALS TO LOGIN AS "ADMIN":
Email: u88f33@gmail.com
Password: OMSadmin123

==================================================

Project Title: Online Medicine Shopping 
Student Name : Muhammad Umar Farooq
VU ID        : BC220401146
Course Code  : CS619 – Final Year Project
Website name: Novemeds Pharmacy

===================================================
1. PROJECT SETUP INSTRUCTIONS
===================================================
A. Project Requirements:
----------------------------------------------------
To run this project successfully, please ensure the following
software is installed on your system:

1) Node.js (Version 18 or above recommended)
2) MongoDB Community Server

The application runs locally at:
http://localhost:5000/

----------------------------------------------
B. Database Setup (MongoDB):
----------------------------------------------
The database backup is available inside the:

backup/online_medicine_shopping

Database name of project is "online_medicine_shopping" stored in "backup/" 
folder. To restore database back use the command given below:

>>> mongorestore --db online_medicine_shopping backup/online_medicine_shopping

Note:
If the commands "mongodump" or "mongorestore" are not recognized,
you need to install MongoDB Database Tools.

Download MongoDB Database Tools from:
Official MongoDB Website:
https://www.mongodb.com/try/download/database-tools

=============================================
2. INSTALLING PROJECT DEPENDENCIES
=============================================

After completing the database setup:

1) Open the project folder: "online-medicine-shopping"
2) Run the following command in the terminal:

In case, if "node_modules" folder is not present in the project
directory, then use "npm install":

>>> npm install (Download node_modules and Project dependencies)

This command will:
- Create the node_modules directory
- Install all required dependencies listed in package.json


==============================================
3. RUNNING THE APPLICATION
==============================================
After restoring the database and installing dependencies,
start the application using one of the following commands:

>>> npm start

OR

>>> node app.js

Once the server starts successfully, open your browser and visit:

http://localhost:5000/

===============================================
4. PROJECT STRUCTURE
===============================================

/src
 |---/models
 |---/routes
 |---/controllers
 |---/middlewares
 |---/views
 |---/public

====================================
Folder Description:
=====================================

Models       -> Define database schemas and data structure  
Routes       -> Handle application endpoints (URLs)  
Controllers  -> Contain business logic and core functionality  
Middlewares  -> Manage authentication and request validation  
Views        -> EJS templates for frontend rendering  
Public       -> Static assets (CSS, JavaScript, images, etc.)  


============================================================
Second method to restore database other than mongorestore.
============================================================
1) You need MongoDB compass (MongDB GUI).
2) MongoDB database collections are also present in the
"json_collections" folder, you need mongoDB compass to
add those collection in "online_medicine_shopping" database.

============================================================
End of Document
============================================================