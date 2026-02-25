import express from "express";

const router = express.Router();

router.get( "/", (req, res, next) => {
    res.render(
        "user/profile", { userName: req.cookies.userName }
    );
} )

export default router;