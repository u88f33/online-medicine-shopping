import express from "express"
import CustomerData from "../../models/Customers.model.js";
// import resetPasswordControllerPost from
// "../../controllers/reset_password_post.controller.js"

const router = express.Router();

router.get( '/:token', async (req, res, next) => {
  const findUser = await CustomerData.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now() } 
  });

  if (!findUser) {
    return res.send('Password reset token is invalid or has expired.');
  }
  
  res.render('auth/resetpassword', { token: req.params.token });
});

export default router;