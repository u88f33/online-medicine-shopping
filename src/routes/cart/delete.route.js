import express from "express"

const router = express.Router();

router.get( "/", ( req, res, next ) => {
    if ( req.session.cart ) {
        req.session.cart = [];
        res.redirect( "/profile" )
    }
} );

export default router;