const updateMedicineByAdminPost = ( req, res, next ) => {
    res.send( {
        b: req.body,
        f: req.file
    } )
}

export default updateMedicineByAdminPost;