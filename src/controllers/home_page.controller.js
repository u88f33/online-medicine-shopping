import Medicines from "../models/Medicine.model.js";

const homePageController = async (req, res, next) => {
    try {

        const getMedicinesData = await Medicines.find();

        res.render(
            "home/homepage",
            { getMedicinesData }
        );

    } catch ( error ) {
        console.log( `Error while rendering Home Page: ${ error.message }` );
    }
};

export default homePageController;