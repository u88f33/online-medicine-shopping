import express from "express"

const router = express.Router();

router.get( "/", (req, res, next) => {
    res.render(
        "home/homepage"
    );
} );

export default router;