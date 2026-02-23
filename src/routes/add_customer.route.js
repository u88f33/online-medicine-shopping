import express from "express"
import addCustomerByAdminGet from "../controllers/add_customer_get.controller.js";
import addCustomerByAdminPost from "../controllers/add_customer_post.controller.js";
import { body } from "express-validator"
const router = express.Router();

const addCustomerValidation = [
    body("customer_name")
    .notEmpty()
    .withMessage("Name is required")
    .isAlpha()
    .withMessage("Only Alphabets and spaces")
    .trim()
    .escape(),

    body("customer_email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .escape(),
]

router.get( "/", addCustomerByAdminGet );
router.post( "/", addCustomerValidation, addCustomerByAdminPost );

export default router;