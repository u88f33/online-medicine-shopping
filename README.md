# VU FYP: Online Medicine Shopping System 

**Student Name**:  Muhammad Umar  
**Degree Program:** BS Computer Science


# Important Notes

Application works on: ```http://localhost:5000```
Do not forget to restore the database before running the project.
Make sure MongoDB service is running.
Ensure correct database name in .env file if used.


# 1. Project Overview:

The Online Medicine Shopping System is a web-based application developed using:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Bootstrap
- EJS

The system allows Customers to browse and order medicines
Admin to manage customers, medicines, suppliers, and orders
Suppliers to be linked with medicines for tracking


## 2. Before Running the Project:
Please make sure the following software is installed on the system:
Node.js (v18+ recommended)
MongoDB Server
MongoDB Database Tools (for mongodump and mongorestore)


## 3. Installing Dependencies:
The node_modules folder has been removed to reduce project size.
After extracting the project:
Open terminal inside the project folder and run command "npm install" in the terminal:
This will install all required dependencies automatically from package.json.


## 4. Restoring the Database
A MongoDB backup has been provided using mongodump.
Step 1: Make Sure MongoDB Service is Running
Start MongoDB service on your system.


# Step 2: Restore the Database
Navigate to the folder where the backup is located and run the command given below:

```mongorestore --db online_medicine_shopping dump/online_medicine_shopping```

This will restore the complete database including:
Customers
Medicines
Suppliers
Orders

### If mongodump or mongorestore Is Not Installed
If the commands mongodump or mongorestore are not recognized, you need to install MongoDB Database Tools.

Download Location:
Official MongoDB Website:
[Download mongodump and mongorestore](https://www.mongodb.com/try/download/database-tools)

Steps:
Open the link above.
Select your Operating System (Windows / macOS / Linux).
Download MongoDB Database Tools.

Extract the folder.
Add the bin folder path to your system Environment Variables.
After adding to environment variables, restart terminal and run:
```mongodump --version```

If version appears, installation is successful.

# 6. Running the Application

After restoring database and installing dependencies:

Run:
```npm start```
or
```node index.js```

Then open browser:
```http://localhost:5000```




