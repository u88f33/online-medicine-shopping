import bcrypt from "bcryptjs";

const password = "Admin Password can be hashed"; // Admin Passward

const adminHashPassword = async () => {
    const hashed = await bcrypt.hash(password, 10);
    console.log(hashed);
};

// Import this function "adminHashPassword()" to "index.js" to Hash Password
// After calling "adminHashPassword()", the password is printed in the console.
// Copy that password and paste it in mongoDB updateOne() function below.
/*
db.admins.updateOne(
  { email: "admin123@gmail.com" },
  { $set: { password: "PASTE HERE" } }
)
*/
export default adminHashPassword;